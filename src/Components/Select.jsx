import React from "react";

const Select = ({ sortSimpsons }) => {
  return (
    <select onChange={sortSimpsons}>
      <option value="sortAsc">Sort Ascending</option>
      <option value="sortDesc">Sort Descending</option>
      <option value="sortFamily">Sort by Family Name</option>
    </select>
  );
};

export default Select;
