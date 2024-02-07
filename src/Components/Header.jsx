import React, { Component } from "react";
import "./CSS/Header.scss";

class Header extends Component {
  render() {
    const {
      searchCharacter,
      simpsons,
      sortAsc,
      sortDesc,
      sortFamilyName,
      restoreCharacters,
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
        <p>Liked Quote: {totalLiked}</p>
        <div className="btnContainer">
          <button onClick={() => sortAsc()} className="headerBtn">
            Sort Ascending
          </button>
          <button onClick={() => sortDesc()} className="headerBtn">
            Sort Descending
          </button>
          <button onClick={() => sortFamilyName()} className="headerBtn">
            Sort by Family Name
          </button>
          <button className="headerBtn restoreBtn" onClick={() => restoreCharacters()}>
            Restore Deleted Characters
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
