import React, { Component } from "react";
import Characters from "./Characters";

class Interface extends Component {
  state = {};
  render() {
    const { simpsons } = this.props;
    return (
      <>
        <input type="text" placeholder="Search Simpson Character" />
        {simpsons.map((simpson) =>
        {
          return (
            <>
              <p>{simpson.quote}</p>
              <p>{simpson.character}</p>
            </>
          );
        })}
      </>
    );
  }
}

export default Interface;
