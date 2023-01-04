import { products } from "../../db";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import MUIButton from "@mui/material/Button";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = products.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          type="text"
          value={searchTerm}
          onChange={handleChange}
          style={{ width: "500px" }}
        />
        <MUIButton type="submit">Search</MUIButton>
      </div>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
