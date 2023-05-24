import React, { useState, useEffect } from "react";
import "./card-styles.css";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../redux/actions";

const Card = (props) => {
  const dispatch = useDispatch();
  const [isFav, setFav] = useState(false);
  const myFavorites = useSelector((state) => state.favoriteCharacters);

  const handleFavorite = () => {
    if (isFav) {
      setFav(false);
      dispatch(removeFav(props.id));
    } else {
      setFav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setFav(true);
      }
    });
  }, [myFavorites, props.id]);
  return (
    <div className="card">
      <Link to={`/detail/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <p>Status: {props.status}</p>
      <p>Specie: {props.species}</p>
      <p>Gender: {props.gender}</p>
      {/* <p>{props.origin !== undefined ? `Origin: ${props.origin}` : ""}</p> */}
      <p>Origin: {props.origin}</p>
      <img className="image" src={props.image} alt="" />
      <div className="btnContainer">
        {isFav ? (
          <button className="favBtn" onClick={handleFavorite}>
            💜
          </button>
        ) : (
          <button className="favBtn" onClick={handleFavorite}>
            🤍
          </button>
        )}

        <button className="closeBtn" onClick={() => props.onClose(props.id)}>
          🚫
        </button>
      </div>
    </div>
  );
};
export default Card;
