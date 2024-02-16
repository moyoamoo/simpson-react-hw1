import React from "react";
import Characters from "./Characters";
import "./CSS/Character.css";
import Header from "./Header";

const Interface = ({
  simpsons,
  showLiked,
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
    <header>
        <Header
          showLiked={showLiked}
          searchCharacter={searchCharacter}
          simpsons={simpsons}
          sortAsc={sortAsc}
          sortDesc={sortDesc}
          sortFamilyName={sortFamilyName}
          restoreCharacters={restoreCharacters}
          errors={errors}
        />
    </header>
    <main>
        <Characters
          deleteCharacter={deleteCharacter}
          likeCharacter={likeCharacter}
          simpsons={simpsons}
        />
    </main>
    </>
  );
};

export default Interface;
