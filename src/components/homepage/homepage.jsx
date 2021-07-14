import React, { Component } from "react";
import HeroSection from "../hero/heroHome";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <HeroSection style={{position: "relative"}}/>
      </>
    );
  }
}

export default HomePage;
