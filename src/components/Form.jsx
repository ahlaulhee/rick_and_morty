import React, { useEffect, useState } from "react";
import "./form.css";
import validate from "./validation";
import logo from "../assets/rickandmortylogo.png";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    // setErrors(validate(userData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  useEffect(() => {
    setErrors(validate(userData));
  }, [userData]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* <h1>Login</h1> */}
      <img src={logo} alt="Logo" />
      {/* <label htmlFor="">Email:</label> */}
      <input
        name="email"
        placeholder="Email"
        type="text"
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email}
      {/* <label htmlFor="">Password:</label> */}
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
