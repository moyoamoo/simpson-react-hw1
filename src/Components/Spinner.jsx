import React, { Component } from "react";
import "./CSS/Spinner.css";

class Spinner extends Component {
  state = {};
  render() {
    return (
      <div className="spinnerContainer">
        <p className="spinnerText">Generating Characters</p>
        <span className="loader"></span>
      </div>
    );
  }
}

export default Spinner;
