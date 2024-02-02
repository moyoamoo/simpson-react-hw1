import React, { Component } from "react";
import "./CSS/Header.css";

class Header extends Component {
  render() {
    const { searchCharacter, simpsons, sortAsc, sortDesc, sortFamilyName } =
      this.props;

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
        <p>Liked Characters: {totalLiked}</p>
        <div>
          <button onClick={() => sortAsc()}>Sort Ascending</button>
          <button onClick={() => sortDesc()}>Sort Descending</button>
          <button onClick={()=> sortFamilyName()}>Sort by Family Name</button>
          <button>Restore Deleted Characters</button>
        </div>
      </header>
    );
  }
}

export default Header;
