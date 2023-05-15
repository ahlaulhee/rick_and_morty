import React from "react";
import "./card-styles.css";

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <input className="searchInput" type="search" />
      <button className="searchBtn" onClick={props.onSearch}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
