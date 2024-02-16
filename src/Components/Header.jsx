import React from "react";
import "./CSS/Header.scss";
import Buttons from "./Buttons";
import Select from "./Select";
const Header = ({
  searchCharacter,
  simpsons,
  showLiked,
  restoreCharacters,
  errors,
  sortSimpsons
}) => {
  let totalLiked = 0;
  simpsons.forEach((simpson) => {
    if (simpson.liked && !simpson.delete) {
      totalLiked++;
    }
  });
  return (
    <header>
      <h1>Simspon Quote Generator</h1>
      <input
        type="text"
        placeholder="Search Simpson Character"
        onInput={searchCharacter}
      />
      <p className="validation">{errors && errors.character}</p>
      <p>Liked Quote: {totalLiked}</p>
      <Buttons showLiked={showLiked} restoreCharacters={restoreCharacters} />
      <Select
        sortSimpsons={sortSimpsons}
      />
    </header>
  );
};

export default Header;
