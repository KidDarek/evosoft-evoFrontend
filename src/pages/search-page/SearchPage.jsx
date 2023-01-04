import React from "react";
import TagSelector from "./TagSelector";
import SearchBar from "./SearchBar";
import { styled } from "@mui/material";

const StyledPadding = styled("div")({
  paddingLeft: "9rem",
  paddingRight: "9rem",
});

const SearchPage = () => {
  return (
    <>
      <StyledPadding>
        <div>SearchPage</div>
        <TagSelector></TagSelector>
        <SearchBar></SearchBar>
      </StyledPadding>
    </>
  );
};

export default SearchPage;
