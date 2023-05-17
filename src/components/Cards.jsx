import React from "react";
import Card from "./Card";
import "./card-styles.css";

const Cards = ({ characters, onClose }) => {
  return (
    <div className="container">
      {characters?.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
};
export default Cards;
