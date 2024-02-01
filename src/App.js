import React, { Component } from "react";
import axios from "axios";
import { getSimpsonsUrl } from "./config";
import Spinner from "./Components/Spinner";
import Interface from "./Components/Interface";
import "./index.css";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }
  getApiData = async () => {
    const { data } = await axios.get(getSimpsonsUrl(30));
    this.setState({ simpsons: data });
    this.addLikeProperty();
    this.addFamilyNameProperty();
  };

  addLikeProperty = () => {
    const [...simpsons] = this.state.simpsons;
    simpsons.forEach((simpson) => {
      simpson["liked"] = false;
    });
    this.setState({ simpsons });
  };

  addFamilyNameProperty = () => {
    const [...simpsons] = this.state.simpsons;
    simpsons.forEach((simpson) => {
      let spaceIndex = simpson.character.indexOf(" ");
      let familyName = simpson.character.slice(
        spaceIndex + 1,
        simpson.character.length + 1
      );
      simpson["familyName"] = familyName;
    });
    this.setState({ simpsons });
    console.log(simpsons);
  };

  sortFamilyName = () => {
    const [...simpsons] = this.state.simpsons;
    simpsons.sort((a, b) => {
      if (a.familyName > b.familyName) {
        return 1;
      } else if (a.familyName < b.familyName) {
        return -1;
      }
    });
    this.setState({ simpsons });
  };

  sortAsc = () => {
    const [...simpsons] = this.state.simpsons;
    simpsons.sort((a, b) => {
      if (a.character > b.character) {
        return 1;
      } else if (a.character < b.character) {
        return -1;
      }
    });
    this.setState({ simpsons });
  };

  sortDesc = () => {
    const [...simpsons] = this.state.simpsons;
    simpsons.sort((a, b) => {
      if (a.character > b.character) {
        return -1;
      } else if (a.character < b.character) {
        return 1;
      }
    });
    this.setState({ simpsons });
  };

  likeCharacter = (quote) => {
    const [...simpsons] = this.state.simpsons;
    const indexOf = simpsons.findIndex((simpson) => simpson.quote === quote);
    console.log(indexOf);
    simpsons[indexOf].liked = !simpsons[indexOf].liked;
    console.log(simpsons[indexOf].liked);
    this.setState({ simpsons });
  };

  searchCharacter = (e) => {
    const [...simpsons] = this.state.simpsons;
    simpsons.filter((character) => character === e.target.value);
    this.setState({ simpsons });
  };

  deleteCharacter = (character) => {
    const [...simpsons] = this.state.simpsons;
    const indexOf = simpsons.findIndex(
      (simpson) => simpson.character === character
    );
    let deletedCharacter = simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
    this.setState({ deletedCharcaters: deletedCharacter });
  };

 h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
  render() {
    const { simpsons } = this.state;
    return !simpsons ? (
      <Spinner />
    ) : (
      <Interface
        simpsons={simpsons}
        name={this.state.name}
        deleteCharacter={this.deleteCharacter}
        searchCharacter={this.searchCharacter}
        likeCharacter={this.likeCharacter}
        sortAsc={this.sortAsc}
        sortDesc={this.sortDesc}
        sortFamilyName={this.sortFamilyName}
      />
    );
  }
}

export default App;
