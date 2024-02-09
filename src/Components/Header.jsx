import React, { Component } from "react";
import "./CSS/Header.scss";
import Buttons from "./Buttons";

class Header extends Component {
  render() {
    const {
      searchCharacter,
      simpsons,
      sortAsc,
      sortDesc,
      sortFamilyName,
      restoreCharacters,
      errors,
    } = this.props;

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
  }
}

export default Header;
