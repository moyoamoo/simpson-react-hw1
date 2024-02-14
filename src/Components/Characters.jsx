import React from "react";
import "./CSS/Character.css";
import Character from "./Character";

const Characters = ({ simpsons, deleteCharacter, likeCharacter }) => {
  return (
    <div className="characterContainer">
      {simpsons.map((simpson) => {
        if (!simpson.delete) {
          return (
            <Character
              key={simpson.id}
              deleteCharacter={deleteCharacter}
              likeCharacter={likeCharacter}
              simpson={simpson}
            />
          );
        }
      })}
    </div>
  );
};

export default Characters;
