import React, { Component } from "react";
import "./CSS/Character.css";

class Characters extends Component {
  render() {
    const { simpson, deleteCharacter } = this.props;
    return (
      <div className="character">
        <div>
          <p>{simpson.character}</p>
          <p>{simpson.quote}</p>
        </div>
        <img src={simpson.image} alt={simpson.character}/>
        <div>
          <button onClick={() => deleteCharacter(simpson.character)}>
            Delete
          </button>
          <button>Like</button>
        </div>
      </div>
    );
  }
}

export default Characters;
