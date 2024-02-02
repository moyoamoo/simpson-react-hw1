import React, { Component } from "react";
import "./CSS/Character.css";
import Character from "./Character";

class Characters extends Component {
  render() {
    const { simpsons, deleteCharacter, likeCharacter } = this.props;
    return (
      <div className="characterContainer">
        {simpsons.map((simpson) => {
          return (
            <Character
              deleteCharacter={deleteCharacter}
              likeCharacter={likeCharacter}
              simpson={simpson}
            />
          );
        })}
      </div>
    );
  }
}

export default Characters;
