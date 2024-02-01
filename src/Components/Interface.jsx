import React, { Component } from "react";
import Characters from "./Characters";
import "./CSS/Character.css";
import Header from "./Header";

class Interface extends Component {
  state = {};
  render() {
    const {
      simpsons,
      deleteCharacter,
      searchCharacter,
      likeCharacter,
      sortAsc,
      sortDesc,
      sortFamilyName
    } = this.props;


    return (
      <>
        <Header
          searchCharacter={searchCharacter}
          simpsons={simpsons}
          sortAsc={sortAsc}
          sortDesc={sortDesc}
          sortFamilyName={sortFamilyName}
        />
        {simpsons.map((simpson) => {
          return (
            <Characters
              key={simpson.quote}
              simpson={simpson}
              deleteCharacter={deleteCharacter}
              likeCharacter={likeCharacter}
            />
          );
        })}
      </>
    );
  }
}

export default Interface;
