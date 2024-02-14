import React from "react";
import "./CSS/Header.scss";
import Buttons from "./Buttons";

const Header = ({
  searchCharacter,
  simpsons,
  sortAsc,
  sortDesc,
  sortFamilyName,
  restoreCharacters,
  errors,
}) => {
  let totalLiked = 0;
  simpsons.forEach((simpson) => {
    if (simpson.liked) {
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
      <Buttons
        sortAsc={sortAsc}
        sortDesc={sortDesc}
        sortFamilyName={sortFamilyName}
        restoreCharacters={restoreCharacters}
      />
    </header>
  );
};

export default Header;
