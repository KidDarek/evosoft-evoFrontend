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
let filteredProducts = products;

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
    filteredProducts = [];
    let includeItem = true;
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < tags.length; j++) {
        if (products[i].tag.indexOf(tags[j]) === -1) {
          includeItem = false;
        }
      }
      if (includeItem) {
        filteredProducts.push(products[i])
      }
      includeItem = true;
    }
    setChecked(!checked);
  }



  return (
    <>
      <StyledPadding>
        <div>SearchPage</div>
        <TagSelector HandleChange={HandleChange}></TagSelector>
        <SearchBar></SearchBar>
        <Grid container spacing={10} justifyContent="center" marginTop={1} marginBottom={10}>
          {tags.length !== 0 && filteredProducts.length === 0 ? <div>No product satisfies your filters</div> :
            filteredProducts.map((product) => (
              <Grid item xs="auto" md="auto" key={product.id}>
                <Card id={product.id} />
              </Grid>
            ))}
        </Grid>
      </StyledPadding>
    </>
  );
};

export default SearchPage;
