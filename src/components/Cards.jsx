import React from "react";
import Card from "./Card";
import "./card-styles.css";

const Cards = ({ characters }) => {
  return (
    <div className="container">
      {characters.map((char) => (
        <Card
          key={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
};
export default Cards;
