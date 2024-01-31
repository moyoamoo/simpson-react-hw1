import React, { Component } from "react";
import axios from "axios";
import { getSimpsonsUrl } from "./config";
import Spinner from "./Components/Spinner";
import Interface from "./Components/Interface";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getApiData();
  }
  getApiData = async () => {
    const { data } = await axios.get(getSimpsonsUrl(50));
    this.setState({ simpsons: data });
  };

  // searchedName = (e) => {
  //   const [...simpsons] = this.state.simpsons;
  //   simpsons.forEach((simpson) => {
  //     if (simpson.character === e.target.value) {
  //       this.setState({ name: e.target.value });
  //     }
  //   });
  // };
  searchCharacter = (e) => {
    const [...simpsons] = this.state.simpsons;
    console.log("true")

    simpsons.filter((character) => character === e.target.value);
    this.setState({ simpsons });
  };

  deleteCharacter = (character) => {
    const [...simpsons] = this.state.simpsons;
    const indexOf = simpsons.findIndex(
      (simpson) => simpson.character === character
    );
    simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
  };

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
      />
    );
  }
}

export default App;
