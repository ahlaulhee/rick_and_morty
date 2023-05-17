import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./card-styles.css";
import Card from "./Card";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const onClose = () => {
    navigate("/home");
  };
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div className="container">
      <Card
        key={character.id}
        id={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        origin={character.origin?.name}
        gender={character.gender}
        image={character.image}
        onClose={onClose}
      />
    </div>
  );
};
export default Detail;
