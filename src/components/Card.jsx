import React from "react";
import "./card-styles.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <Link to={`/detail/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <p>Status: {props.status}</p>
      <p>Specie: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>{props.origin !== undefined ? `Origen: ${props.origin}` : ""}</p>
      <img className="image" src={props.image} alt="" />
      <button className="closeBtn" onClick={() => props.onClose(props.id)}>
        X
      </button>
    </div>
  );
};
export default Card;
