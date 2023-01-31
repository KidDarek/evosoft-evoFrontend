import * as React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = (props) => {
  return (
    <div style={{ padding: "10px" }}>
      <form onSubmit={props.handleSubmit}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          value={props.searchString}
          onChange={props.handleSearch}
          style={{ width: "250px" }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
