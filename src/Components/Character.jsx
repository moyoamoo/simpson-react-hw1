import React, { Component } from "react";

class Character extends Component {
  render() {
    const { simpson, deleteCharacter, likeCharacter } = this.props;

    return (
      <div className="character">
        <div
          className={simpson.characterDirection === "Right" ? "Right" : "Left"}
        >
          <div className="quoteContainer">
            <p className="name">{simpson.character}</p>
            <p className="quote">{simpson.quote}</p>
          </div>

          <div className="imageContainer">
            <img src={simpson.image} alt={simpson.character} />
          </div>
        </div>
        <div>
          <button onClick={() => deleteCharacter(simpson.character)}>
            Delete
          </button>
          <button
            onClick={() => likeCharacter(simpson.quote)}
            className={simpson.liked ? "liked" : "notLiked"}
          >
            Like
          </button>
        </div>
      </div>
    );
  }
}

export default Character;
