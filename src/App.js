import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { getSimpsonsUrl } from "./config";
import Spinner from "./Components/Spinner";
import Interface from "./Components/Interface";
import "./index.css";
import Joi from "joi";
import { json } from "react-router-dom";

const App = () => {
  const [simpsons, setSimpsons] = useState();
  const [userSearch, setUserSearch] = useState();
  const [filtered, setFiltered] = useState();
  const [errors, setErrors] = useState();

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

  const loadDatafromDisk = () => {
    const dataFromDisk = localStorage.getItem("simpsons");
    console.log(dataFromDisk);
    if (dataFromDisk) {
      console.log(JSON.parse(dataFromDisk));
      return JSON.parse(dataFromDisk);
    }
  };

  useEffect(() => {
    const dataFromDisk = loadDatafromDisk();
    if (dataFromDisk) {
      setSimpsons(dataFromDisk);
    } else {
      getApiData();
    }
  }, [getApiData]);

  useEffect(() => {
    if (simpsons){
      localStorage.setItem("simpsons", JSON.stringify(simpsons));
    }
  }, [simpsons]);

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

  const sortSimpsons = (e) => {
    const value = e.target.value;
    const newSimpsons = [...simpsons];
    console.log(value);

    switch (value) {
      case "sortAsc":
        newSimpsons.sort((a, b) => {
          if (a.character > b.character) {
            return 1;
          } else if (a.character < b.character) {
            return -1;
          }
        });
        break;
      case "sortDesc":
        newSimpsons.sort((a, b) => {
          if (a.character < b.character) {
            return 1;
          } else if (a.character > b.character) {
            return -1;
          }
        });
      case "sortFamily":
        newSimpsons.sort((a, b) => {
          if (a.familyName > b.familyName) {
            return 1;
          } else if (a.familyName < b.familyName) {
            return -1;
          }
        });
      default:
        break;
    }
    setSimpsons(newSimpsons);
  };


  const schema = { character: Joi.string().min(3).max(19) };
  const searchCharacter = async (e) => {
    const newSimpsons = [...simpsons];
    const search = { character: e.target.value };
    setUserSearch(search);

    const _joiInstance = Joi.object(schema);

    try {
      await _joiInstance.validateAsync(userSearch);
      setErrors({});
    } catch (error) {
      const newErrors = {};
      error.details.forEach((error) => {
        newErrors[error.context.key] = error.message;
      });

      setErrors(newErrors);
      console.log(newErrors);
    }

    const newFiltered = newSimpsons.filter((simpson) => {
      if (
        simpson.character.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return true;
      }
    });
    setFiltered(newFiltered);
  };

  const showLiked = () => {
    const newSimpsons = [...simpsons];
    const newFiltered = newSimpsons.filter((simpson) => {
      if (simpson.liked) {
        return true;
      }
    });
    setFiltered(newFiltered);
  };

  return !simpsons ? (
    <Spinner />
  ) : (
    <Interface
      simpsons={filtered ? filtered : simpsons}
      showLiked={showLiked}
      deleteCharacter={deleteCharacter}
      searchCharacter={searchCharacter}
      likeCharacter={likeCharacter}
      restoreCharacters={restoreCharacters}
      errors={errors}
      sortSimpsons={sortSimpsons}
    />
  );
};
export default App;
