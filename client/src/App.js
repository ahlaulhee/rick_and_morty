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
  // const EMAIL = "admin@admin.com";
  // const PASSWORD = "admins";

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const login = (userData) => {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // };

  const login = async (userData) => {
    const response = await axios(
      `http://localhost:3001/rickandmorty/login/?email=${userData.email}&password=${userData.password}`
    );
    setAccess(response.data.access);
    response.data.access && navigate("/home");
    // axios(
    //   `http://localhost:3001/rickandmorty/login/?email=${userData.email}&password=${userData.password}`
    // ).then((res) => {
    //   setAccess(res.data.access);
    //   res.data.access && navigate("/home");
    // });
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  const onSearch = async (id) => {
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (
        response.data.name &&
        !(characters.find((char) => char.id === id) !== undefined)
      ) {
        setCharacters((oldChars) => [...oldChars, response.data]);
      } else {
        window.alert(
          "¡No hay personajes con este ID o ya se encuentra en la lista!"
        );
      }
    } catch (error) {
      window.alert(error.message);
    }

    // try {
    //   const response = await axios(
    //     `http://localhost:3001/rickandmorty/character/${id}`
    //   );
    //   if (
    //     response.data.name &&
    //     !(characters.find((char) => char.id === Number(id)) !== undefined)
    //   ) {
    //     setCharacters((oldChars) => [...oldChars, response.data]);
    //     res.status(200).json(response.data)
    //   } else {
    //     res.status(404).json({error: "Not found or the character is already on the list."})
    //   }
    // } catch (error) {
    //   res.status(500).json(error.message)
    // }

    // axios(`https://rickandmortyapi.com/api/character/${id}`)
    //   .then(({ data }) => {
    //     if (
    //       data.name &&
    //       !(characters.find((char) => char.id === Number(id)) !== undefined)
    //     ) {
    //       setCharacters((oldChars) => [...oldChars, data]);
    //     } else {
    //       window.alert(
    //         "¡No hay personajes con este ID o ya se encuentra en la lista!"
    //       );
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
