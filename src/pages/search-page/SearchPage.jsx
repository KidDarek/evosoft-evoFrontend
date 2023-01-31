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
  backgroundColor: "#ff0055",
  paddingLeft: "25px",
  paddingRight: "25px",
});

const SearchPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);

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

    if (selectedPrice.length > 0) {
      filtered = filtered.filter((product) => {
        return product.price <= selectedPrice[1] && product.price >= selectedPrice[0];
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
        <div style={{ backgroundColor: "#00cc99" }}>
          <h1
            style={{
              textAlign: "center",
              backgroundImage: "linear-gradient(to right,#ff0055, #0066ff, #ff0055)",
              height: "50px",
            }}
          >
            SearchPage
          </h1>
          <div style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            height: '100%'
          }}>
            <div style={{ backgroundColor: "#00cc99", justifyContent: "start" }}>
              <SearchBar
                searchString={searchString}
                handleSearch={handleSearch}
                handleSubmit={handleSubmit}
              />
              <TagSelector onSelect={handleTagSelector} />
              <PriceRange
                setSelectedPrice={setSelectedPrice}
                filterProducts={filterProducts}
              ></PriceRange>
            </div>
            <div>
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
          </div>
        </div>
      </StyledPadding>
    </>
  );
};

export default SearchPage;
