import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { getSimpsonsUrl } from "./config";
import Spinner from "./Components/Spinner";
import Interface from "./Components/Interface";
import "./index.css";
import Joi from "joi";

const App = () => {
  const [simpsons, setSimpsons] = useState();
  const [userSearch, setUserSearch] = useState({});
  const [filtered, setFiltered] = useState();

  const getApiData = useCallback(async () => {
    const { data } = await axios.get(getSimpsonsUrl(50));
    data.forEach((simpson) => {
      simpson["liked"] = false;
      simpson["id"] = Math.random();
      simpson["delete"] = false;
      let spaceIndex = simpson.character.indexOf(" ");
      let familyName = simpson.character.slice(
        spaceIndex + 1,
        simpson.character.length + 1
      );
      simpson["familyName"] = familyName;
    });

    setSimpsons(data);
  }, []);

  useEffect(() => {
    getApiData();
  }, [getApiData]);

  const likeCharacter = (quote) => {
    const newSimpsons = [...simpsons];
    const indexOf = newSimpsons.findIndex((simpson) => simpson.quote === quote);
    newSimpsons[indexOf].liked = !newSimpsons[indexOf].liked;
    setSimpsons(newSimpsons);
  };

  const deleteCharacter = (quote) => {
    const newSimpsons = [...simpsons];
    const indexOf = newSimpsons.findIndex((simpson) => simpson.quote === quote);
    newSimpsons[indexOf].delete = !newSimpsons[indexOf].delete;
    setSimpsons(newSimpsons);
  };

  const restoreCharacters = () => {
    const newSimpsons = [...simpsons];
    newSimpsons.forEach((simpson) => {
      simpson.delete = false;
    });
    setSimpsons(newSimpsons);
  };

  const sortFamilyName = () => {
    const newSimpsons = [...simpsons];
    newSimpsons.sort((a, b) => {
      if (a.familyName > b.familyName) {
        return 1;
      } else if (a.familyName < b.familyName) {
        return -1;
      }
    });
    setSimpsons(newSimpsons);
  };

  const sortAsc = () => {
    const newSimpsons = [...simpsons];
    newSimpsons.sort((a, b) => {
      if (a.character > b.character) {
        return 1;
      } else if (a.character < b.character) {
        return -1;
      }
    });
    setSimpsons(newSimpsons);
  };

  const sortDesc = () => {
    const newSimpsons = [...simpsons];
    newSimpsons.sort((a, b) => {
      if (a.character > b.character) {
        return -1;
      } else if (a.character < b.character) {
        return 1;
      }
    });
    setSimpsons(newSimpsons);
  };

  const schema = { character: Joi.string().min(3).max(19) };
  const searchCharacter = async (e) => {
    const newSimpsons = [...simpsons];
   ZZ
    // this.setState({ userSearch });
    // const _joiInstance = Joi.object(schema);

    // try {
    //   await _joiInstance.validateAsync(userSearch);
    //   this.setState({ errors: undefined });
    // } catch (error) {
    //   console.log(error);

    //   const errorsFormat = {};
    //   error.details.forEach((error) => {
    //     errorsFormat[error.context.key] = error.message;
    //   });

    //   this.setState({ errors: errorsFormat });
    // }

    // const filtered = simpsons.filter((simpson) => {
    //   if (
    //     simpson.character.toLowerCase().includes(e.target.value.toLowerCase())
    //   ) {
    //     return true;
    //   }
    // });

    // this.setState({ filtered });
  };

  return !simpsons ? (
    <Spinner />
  ) : (
    <Interface
      simpsons={simpsons}
      // name={this.state.name}
      deleteCharacter={deleteCharacter}
      searchCharacter={searchCharacter}
      likeCharacter={likeCharacter}
      sortAsc={sortAsc}
      sortDesc={sortDesc}
      sortFamilyName={sortFamilyName}
      restoreCharacters={restoreCharacters}
      // errors={this.state.errors}
    />
  );
};
export default App;

// class App extends Component {
//   state = { deletedCharacters: {} };
//   componentDidMount() {
//     this.getApiData();
//   }
//   getApiData = async () => {
//     const { data } = await axios.get(getSimpsonsUrl(50));
//     data.forEach((simpson) => {
//       simpson["liked"] = false;
//       simpson["id"] = Math.random();
//       simpson["delete"] = false;
//     });
//     data.forEach((simpson) => {
//       let spaceIndex = simpson.character.indexOf(" ");
//       let familyName = simpson.character.slice(
//         spaceIndex + 1,
//         simpson.character.length + 1
//       );
//       simpson["familyName"] = familyName;
//     });
//     this.setState({ simpsons: data });
//   };

//   sortFamilyName = () => {
//     const [...simpsons] = this.state.simpsons;
//     simpsons.sort((a, b) => {
//       if (a.familyName > b.familyName) {
//         return 1;
//       } else if (a.familyName < b.familyName) {
//         return -1;
//       }
//     });
//     this.setState({ simpsons });
//   };

//   sortAsc = () => {
//     const [...simpsons] = this.state.simpsons;
//     simpsons.sort((a, b) => {
//       if (a.character > b.character) {
//         return 1;
//       } else if (a.character < b.character) {
//         return -1;
//       }
//     });
//     this.setState({ simpsons });
//   };

//   sortDesc = () => {
//     const [...simpsons] = this.state.simpsons;
//     simpsons.sort((a, b) => {
//       if (a.character > b.character) {
//         return -1;
//       } else if (a.character < b.character) {
//         return 1;
//       }
//     });
//     this.setState({ simpsons });
//   };

//   likeCharacter = (quote) => {
//     const [...simpsons] = this.state.simpsons;
//     const indexOf = simpsons.findIndex((simpson) => simpson.quote === quote);
//     simpsons[indexOf].liked = !simpsons[indexOf].liked;
//     console.log(simpsons[indexOf].liked);
//     this.setState({ simpsons });
//   };

//   schema = { character: Joi.string().min(3).max(19) };
//   searchCharacter = async (e) => {
//     const [...simpsons] = this.state.simpsons;
//     const userSearch = { ...this.state.userSearch };
//     userSearch["character"] = e.target.value;
//     console.log(userSearch.character);

//     this.setState({ userSearch });
//     const _joiInstance = Joi.object(this.schema);

//     try {
//       await _joiInstance.validateAsync(userSearch);
//       this.setState({ errors: undefined });
//     } catch (error) {
//       console.log(error);

//       const errorsFormat = {};
//       error.details.forEach((error) => {
//         errorsFormat[error.context.key] = error.message;
//       });

//       this.setState({ errors: errorsFormat });
//     }

//     const filtered = simpsons.filter((simpson) => {
//       if (
//         simpson.character.toLowerCase().includes(e.target.value.toLowerCase())
//       ) {
//         return true;
//       }
//     });

//     this.setState({ filtered });
//   };

//   deleteCharacter = (quote) => {
//     const [...simpsons] = this.state.simpsons;
//     const indexOf = simpsons.findIndex((simpson) => simpson.quote === quote);
//     simpsons[indexOf].delete = !simpsons[indexOf].delete;
//     this.setState({ simpsons });
//   };

//   restoreCharacters = () => {
//     let [...simpsons] = this.state.simpsons;
//     simpsons.forEach((simpson) => {
//       simpson.delete = false;
//     });
//     this.setState({ simpsons });
//   };

//   render() {
//     const { simpsons, filtered } = this.state;
//     return !simpsons ? (
//       <Spinner />
//     ) : (
//       <Interface
//         simpsons={filtered ? filtered : simpsons}
//         name={this.state.name}
//         deleteCharacter={this.deleteCharacter}
//         searchCharacter={this.searchCharacter}
//         likeCharacter={this.likeCharacter}
//         sortAsc={this.sortAsc}
//         sortDesc={this.sortDesc}
//         sortFamilyName={this.sortFamilyName}
//         restoreCharacters={this.restoreCharacters}
//         errors={this.state.errors}
//       />
//     );
//   }
// }

// export default App;
