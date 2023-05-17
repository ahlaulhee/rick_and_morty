import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Detail from "./components/Detail";
import Nav from "./components/Nav";
import Error from "./components/Error";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

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
  };
  useEffect(() => {}, [characters]);
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        {/* <Route
          path="/home"
          element={<Home />}
          chars={characters}
          onCloseFunc={onClose}
        /> */}
        <Route path="*" element={<Error />} />
        <Route
          path="/home"
          element={<Home chars={characters} onCloseFunc={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
