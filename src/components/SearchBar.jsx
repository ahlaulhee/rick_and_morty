import React, { useState } from "react";
import "./card-styles.css";

const SearchBar = (props) => {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div>
      <input
        placeholder="1-826"
        className="searchInput"
        onChange={(e) => handleChange(e)}
        value={id}
        type="search"
      />
      <button className="searchBtn" onClick={() => props.onSearch(id)}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
