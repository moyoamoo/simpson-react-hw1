import React, { Component } from "react";
import Characters from "./Characters";
import "./CSS/Character.css";

class Interface extends Component {
  state = {};
  render() {
    const { simpsons, deleteCharacter, searchCharacter } = this.props;

    return (
      <>
        <input
          type="text"
          placeholder="Search Simpson Character"
          onInput={() => searchCharacter}
        />
        {simpsons.map((simpson) => {
          return (
            <Characters
              key={simpson.quote}
              simpson={simpson}
              deleteCharacter={deleteCharacter}
            />
          );
        })}
      </>
    );
  }
}

export default Interface;
