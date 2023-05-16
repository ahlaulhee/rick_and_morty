import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
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
  }

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== Number(id)));
  }

  // const onSearch = (id) => {
  //   const newCharacter = {
  //     id: 1,
  //     name: "Rick Sanchez",
  //     status: "Alive",
  //     species: "Human",
  //     gender: "Male",
  //     origin: {
  //       name: "Earth (C-137)",
  //       url: "https://rickandmortyapi.com/api/location/1",
  //     },
  //     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //   };

  //   setCharacters([...characters, newCharacter]);
  // };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
