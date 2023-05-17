import React from "react";
import "../App.css";
import Cards from "./Cards.jsx";
// import Nav from "./Nav.jsx";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

const Home = ({ chars, onCloseFunc }) => {
  console.log(chars);
  //   const onSearch = (id) => {
  //     axios(`https://rickandmortyapi.com/api/character/${id}`)
  //       .then(({ data }) => {
  //         if (
  //           data.name &&
  //           !(characters.find((char) => char.id === Number(id)) !== undefined)
  //         ) {
  //           setCharacters((oldChars) => [...oldChars, data]);
  //         } else {
  //           window.alert(
  //             "¡No hay personajes con este ID o ya se encuentra en la lista!"
  //           );
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   const onClose = (id) => {
  //     setCharacters(characters.filter((element) => element.id !== Number(id)));
  //   };
  return (
    <div className="App">
      {/* <Nav onSearch={onSearch} /> */}
      <Cards characters={chars} onClose={onCloseFunc} />
    </div>
  );
};

export default Home;
