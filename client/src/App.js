import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Detail from "./components/Detail";
import Nav from "./components/Nav";
import Error from "./components/Error";
import axios from "axios";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const EMAIL = "admin@admin.com";
  const PASSWORD = "123456";

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (
          data.name &&
          !(characters.find((char) => char.id === Number(id)) !== undefined)
        ) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert(
            "¡No hay personajes con este ID o ya se encuentra en la lista!"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((element) => element.id !== Number(id)));
    dispatch(removeFav(id));
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access, characters]);
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav logout={logout} onSearch={onSearch} />}
      <Routes>
        {/* <Route
          path="/home"
          element={<Home />}
          chars={characters}
          onCloseFunc={onClose}
        /> */}
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Home chars={characters} onCloseFunc={onClose} />}
        />
        <Route
          path="/favorites"
          element={<Favorites onCloseFunc={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
