import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import "./card-styles.css";

const Favorites = (props) => {
  const favorites = useSelector((state) => state.favoriteCharacters);
  return (
    <div className="container">
      {favorites?.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin}
          image={char.image}
          onClose={() => props.onCloseFunc(char.id)}
        />
      ))}
    </div>
  );
};
export default Favorites;
