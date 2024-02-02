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
  <Characters deleteCharacter={deleteCharacter} likeCharacter={likeCharacter} simpsons={simpsons}/>
      </>
    );
  }
}

export default Interface;
