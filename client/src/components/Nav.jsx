import React from "react";
import SearchBar from "./SearchBar";
import "./card-styles.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="searchBar">
      <button className="randomBtn">
        <NavLink to="/home">Home</NavLink>
      </button>
      <button className="randomBtn">
        <NavLink to="/favorites">Favorites</NavLink>
      </button>
      <button className="randomBtn">
        <NavLink to="/about">About</NavLink>
      </button>
      <button
        className="randomBtn"
        onClick={() =>
          props.onSearch(Math.floor(Math.random() * (826 - 1 + 1) + 1))
        }
      >
        Add a Random Character!
      </button>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
