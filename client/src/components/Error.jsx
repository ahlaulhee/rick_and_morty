import React from "react";
import "./card-styles.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1 className="errorMessage">Error 404: Page Not Found</h1>
      <Link to="/home">
        <button className="randomBtn">Go Back</button>
      </Link>
    </div>
  );
};

export default Error;
