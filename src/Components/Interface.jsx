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
  restoreCharacters,
  errors,
  sortSimpsons,
}) => {
  return (
    <>
      <header>
        <Header
          showLiked={showLiked}
          searchCharacter={searchCharacter}
          simpsons={simpsons}
          restoreCharacters={restoreCharacters}
          errors={errors}
          sortSimpsons={sortSimpsons}
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
