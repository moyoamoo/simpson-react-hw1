import React, { Component } from "react";

class Select extends Component {
  state = {
    options: [
      { text: "Ascending - AZ", value: "AZ" },
      { text: "Descending - ZA", value: "ZA" },
    ],
  };
  render() {
    const { sortCharacters } = this.props;
    return (
      <>
        <label htmlFor="sortCharacters">Sort Characters</label>
        <select
          name="sortCharacters"
          id="sortCharaters"
          onChange={() => sortCharacters()}
        >
          <option value="AZ">Ascending - AZ</option>
          <option value="ZA">Descending - ZA</option>
        </select>
      </>
    );
  }
}

export default Select;
