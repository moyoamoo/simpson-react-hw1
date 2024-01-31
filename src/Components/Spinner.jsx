import React, { Component } from "react";
import "./CSS/Spinner.css";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <>
        <p>Generating Characters</p>
        <span className="loader"></span>
      </>
    );
  }
}

export default Spinner;
