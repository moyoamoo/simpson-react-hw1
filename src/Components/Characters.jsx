import React, { Component } from "react";
import "./CSS/Character.css";

class Characters extends Component {
  render() {
    const { simpson, deleteCharacter, likeCharacter } = this.props;
    return (
      <div className="character">
        <div
          className={simpson.characterDirection === "Right" ? "right" : "left"}
        >
          <div>
            <p>{simpson.character}</p>
            <p>{simpson.quote}</p>
          </div>
          <img src={simpson.image} alt={simpson.character} />
        </div>
        <div>
          <button onClick={() => deleteCharacter(simpson.character)}>
            Delete
          </button>
          <button onClick={() => likeCharacter(simpson.quote)} className={simpson.liked ? "liked" : "notLiked"}>Like</button>
        </div>
      </div>
    );
  }
}

export default Characters;
