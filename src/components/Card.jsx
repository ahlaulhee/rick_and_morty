import React from "react";
import "./card-styles.css";

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>Status: {props.status}</p>
      <p>Specie: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>{props.origin !== "unknown" ? `Origen: ${props.origin}` : ""}</p>
      <img className="image" src={props.image} alt="" />
      <button className="closeBtn" onClick={() => props.onClose(props.id)}>
        X
      </button>
    </div>
  );
};
export default Card;
