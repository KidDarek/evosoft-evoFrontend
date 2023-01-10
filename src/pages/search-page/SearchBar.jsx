import React, { useState } from "react";

const SearchBar = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.searchString}
        onChange={props.handleSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
