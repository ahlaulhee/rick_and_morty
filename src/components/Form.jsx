import React, { useState } from "react";

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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Email:</label>
      <input type="text" value={userData.email} onChange={handleChange} />
      <label htmlFor="">Password:</label>
      <input type="text" value={userData.password} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
