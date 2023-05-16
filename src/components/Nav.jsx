import React from "react";
import SearchBar from "./SearchBar";
import "./card-styles.css";

const Nav = (props) => {
  return (
    <div className="searchBar">
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
