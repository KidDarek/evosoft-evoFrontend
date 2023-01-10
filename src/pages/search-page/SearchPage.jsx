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

const SearchPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchString, setSearchString] = useState("");

  const handleTagSelector = (tags) => {
    setFilteredProducts(
      products.filter((product) =>
        product.tag.some((tag) => tags.indexOf(tag) >= 0)
      )
    );
  };

  const handlePriceSelector = (prices) => {
    setFilteredProducts(
      products.filter((product) =>
        product.pricevalue.valueOf() <= prices
      )
    );
  };

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredProducts(
      filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchString.toLowerCase())
      )
    );
  };

  return (
    <>
      <StyledPadding>
        <div>SearchPage</div>
        <TagSelector onSelect={handleTagSelector} />
        <PriceRange></PriceRange>
        <SearchBar
          searchString={searchString}
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          priceValue={handlePriceSelector}
        />
        <Grid
          container
          spacing={10}
          justifyContent="center"
          marginTop={1}
          marginBottom={10}
        >
          {filteredProducts.length === 0 ? (
            <div>No product satisfies your filters</div>
          ) : (
            filteredProducts.map((product) => (
              <Grid item xs="auto" md="auto" key={product.id}>
                <Card id={product.id} />
              </Grid>
            ))
          )}
        </Grid>
      </StyledPadding>
    </>
  );
};

export default SearchPage;
