import React from "react";
import Card from "./Card";
import pic from "../assets/pic.jpeg";

const About = () => {
  const onClose = () => {
    console.log("hi");
  };
  return (
    <div className="container">
      <Card
        key="1"
        id="1"
        name="Alex Hernan Laulhe"
        status="Alive"
        species="Henry Student"
        gender="Male"
        origin="FT38-B"
        image={pic}
        onClose={onClose}
      />
    </div>
  );
};

export default About;
