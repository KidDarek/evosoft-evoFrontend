import React, { useState } from "react";
import TagSelector from "./TagSelector";
import SearchBar from "./SearchBar";
import { styled } from "@mui/material";
import PriceRange from "./PriceRange";
import { products } from "../../db";
import Card from "../main-page/best-deals/Card";
import { Grid } from "@mui/material";
import { useEffect } from "react";

const StyledPadding = styled("div")({
  paddingLeft: "25px",
  paddingRight: "25px",
});

const SearchPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const filterProducts = () => {
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
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    filterProducts();
  }, [selectedTags]);

  const handleTagSelector = (tags) => {
    setSelectedTags(tags);
    filterProducts();
  };

  const priceFilter = (values) => {
    setFilteredProducts(
      products.filter(
        (product) => product.price <= values[1] && product.price >= values[0]
      )
    );
  };

  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterProducts();
  };

  return (
    <>
      <StyledPadding>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "#00cc99",
            height: "50px",
          }}
        >
          SearchPage
        </h1>
        <div style={{ backgroundColor: "#00cc99", justifyContent: "start" }}>
          <SearchBar
            searchString={searchString}
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
          />
          <TagSelector onSelect={handleTagSelector} />
          <PriceRange doFilter={priceFilter}></PriceRange>
          <div></div>
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
        </div>
      </StyledPadding>
    </>
  );
};

export default SearchPage;
