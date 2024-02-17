import React from "react";
import Button from "./Button";

const Character = ({ simpson, deleteCharacter, likeCharacter, favouriteSimpson }) => {
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
      <div className="btnContainer">
       
        <Button className="deleteBtn" onClick={() => deleteCharacter(simpson.quote)} text="delete"/>
        <Button className={simpson.liked ? "liked" : "notLiked"} text={simpson.liked ? "Liked" : "Like"} onClick={() => likeCharacter(simpson.quote)}/>
      </div>
    </div>
  );
};

export default Character;
