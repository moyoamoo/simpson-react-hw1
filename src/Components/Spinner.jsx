import React from "react";
import "./CSS/Spinner.css";

const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <p className="spinnerText">Generating Characters</p>
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
