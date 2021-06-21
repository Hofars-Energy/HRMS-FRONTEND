import "./heroHome.css";
import React from "react";
import Typewriter from "typewriter-effect";
const HeroSection = () => {
  return (
    <div className="hero-container10">
      <h1>Hofars</h1>
      <p>Inspiring Transformation With Technology </p>
      <br></br>
      <Typewriter
        options={{
          strings: ["IT", "Energy", "Customer Excellence", "Human Resources"],
          delay: 50,
          deleteSpeed: 30,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default HeroSection;
