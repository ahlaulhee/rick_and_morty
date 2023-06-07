import React, { useState } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import "./card-styles.css";

import { filterCards, orderCards } from "../redux/actions";

const Favorites = (props) => {
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  // const allCharacters = useSelector((state) => state.allCharacters);
  const favorites = useSelector((state) => state.favoriteCharacters);

  const handleFilter = (e) => {
    e.preventDefault();
    dispatch(filterCards(e.target.value));
    setRefresh(!refresh);
    console.log(favorites);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(orderCards(e.target.value));
    setRefresh(!refresh);
    console.log(favorites);
  };
  return (
    <div>
      <div className="select-container">
        <select className="select" onChange={handleOrder}>
          <option value="A">Ascendent</option>
          <option value="D">Descendent</option>
        </select>
        <select className="select" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
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
    </div>
  );
};
export default Favorites;
