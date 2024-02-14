import React from "react";
import Characters from "./Characters";
import "./CSS/Character.css";
import Header from "./Header";

const Interface = ({
  simpsons,
  deleteCharacter,
  searchCharacter,
  likeCharacter,
  sortAsc,
  sortDesc,
  sortFamilyName,
  restoreCharacters,
  errors,
}) => {
  return (
    <>
      <Header
        searchCharacter={searchCharacter}
        simpsons={simpsons}
        sortAsc={sortAsc}
        sortDesc={sortDesc}
        sortFamilyName={sortFamilyName}
        restoreCharacters={restoreCharacters}
        errors={errors}
      />
      <Characters
        deleteCharacter={deleteCharacter}
        likeCharacter={likeCharacter}
        simpsons={simpsons}
      />
    </>
  );
};

export default Interface;
