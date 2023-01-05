import React, { useState } from "react";
import TagSelector from "./TagSelector";
import SearchBar from "./SearchBar";
import { styled } from "@mui/material";
import PriceRange from "./PriceRange";
import { products } from "../../db";
import Card from "../main-page/best-deals/Card";
import { Grid } from "@mui/material";

const StyledPadding = styled("div")({
  paddingLeft: "9rem",
  paddingRight: "9rem",
});

const tags = [];
let filteredProductsIds = [];
const SearchPage = () => {

  const [checked, setChecked] = useState(false);

  const HandleChange = (tag) => {
    const index = tags.indexOf(tag);
    if (index === -1) {
      tags.push(tag);
    }
    else {
      tags.splice(index, 1);
    }
    filteredProductsIds = [];
    let includeItem = true;
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < tags.length; j++) {
        if (products[i].tag.indexOf(tags[j]) === -1) {
          includeItem = false;
        }
      }
      if (includeItem) {
        filteredProductsIds.push(products[i].id)
      }
      includeItem = true;
    }
    console.log(filteredProductsIds);
    setChecked(!checked);
  }



  return (
    <>
      <StyledPadding>
        <div>SearchPage</div>
        <TagSelector HandleChange={HandleChange}></TagSelector>
        <SearchBar></SearchBar>
        <Grid container spacing={10} justifyContent="center" marginTop={1} marginBottom={10}>
          {tags.length !== 0 ? filteredProductsIds.map((id) => (
            <Grid item xs="auto" md="auto" key={id}>
              <Card id={id} />
            </Grid>
          )) : null}
        </Grid>
      </StyledPadding>
    </>
  );
};

export default SearchPage;
