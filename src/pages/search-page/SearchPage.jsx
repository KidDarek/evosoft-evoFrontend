import React, { useState, useCallback, useEffect } from "react";
import { styled, Grid } from "@mui/material";
import { products } from "../../db";
import Card from "../main-page/best-deals/Card";
import Filter from "./Filter";

const StyledPadding = styled("div")({
  backgroundImage: "linear-gradient(to right,#ff0055, #0066ff, #ff0055)",
  paddingLeft: "25px",
  paddingRight: "25px",
  paddingBottom: "50px",
});

const StyledDiv = styled("div")({
  backgroundColor: "#00cc99",
});

const StyledTitle = styled("div")({
  textAlign: "center",
  backgroundImage: "linear-gradient(to right,#ff0055, #0066ff, #ff0055)",
  height: "50px",
  fontSize: "35px",
  fontWeight: "bold",
  color: "white",
});

const StyledContent = styled("div")({
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  height: "100%",
});

const INITIAL_MIN_PRICE_VALUE = 0;
const INITIAL_MAX_PRICE_VALUE = 9999;

const SearchPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([
    INITIAL_MIN_PRICE_VALUE,
    INITIAL_MAX_PRICE_VALUE,
  ]);

  const filterProducts = useCallback(() => {
    let filtered = [...products];

    if (searchString.length > 0) {
      filtered = filtered.filter((product) => {
        return product.title.toLowerCase().includes(searchString.toLowerCase());
      });
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((product) => {
        return selectedTags.every((tag) => product.tag.includes(tag));
      });
    }

    if (selectedPriceRange.length > 0) {
      filtered = filtered.filter((product) => {
        return (
          product.price <= selectedPriceRange[1] &&
          product.price >= selectedPriceRange[0]
        );
      });
    }
    setFilteredProducts(filtered);
  }, [selectedTags, searchString, selectedPriceRange]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <StyledPadding>
        <StyledDiv>
          <StyledTitle>SearchPage</StyledTitle>
          <StyledContent>
            <Filter
              handleSearch={handleSearch}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              filterProducts={filterProducts}
            />
            <div style={{ width: "70%" }}>
              <Grid
                container
                spacing={10}
                justifyContent="center"
                marginTop={1}
                marginBottom={5}
                paddingBottom={5}
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
            </div>
          </StyledContent>
        </StyledDiv>
      </StyledPadding>
    </>
  );
};

export default SearchPage;
