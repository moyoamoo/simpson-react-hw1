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
  render() {
    const { simpsons } = this.state;
  
    return !simpsons ? <Spinner /> : <Interface simpsons={simpsons} />;
  }
}

export default App;
