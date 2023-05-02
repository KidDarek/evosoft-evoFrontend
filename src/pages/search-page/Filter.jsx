import React, { useContext } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  ProductContext,
  ProductContextProvider,
} from "../../context-providers/ProductContext";

const StyledFilterBox = styled("div")({
  backgroundColor: "#00cc99",
  justifyContent: "start",
  marginLeft: "10px",
  marginTop: "83px",
  border: "3px solid #00a568",
  width: "30%",
  height: "100%",
  "@keyframes filterpopin": {
    from: {
      transform: "translateX(-100%)",
      opacity: "0",
    },
    to: {
      transform: "translateX(0)",
      opacity: "1",
    },
  },
  animation: "filterpopin 0.7s 1 ease",
  position: "static",
});

const StyledFilterHider = styled("div")({
  "@keyframes filtertextfieldanimation": {
    from: {
      transform: "translateX(-100%)",
      opacity: "0",
    },
    to: {
      transform: "translateX(0)",
      opacity: "1",
    },
  },
  animation: "filtertextfieldanimation 0.5s 1 ease",
  position: "static",
});

const Filter = (props) => {
  const {
    selectedTags,
    setSelectedTags,
    selectedPriceRange,
    setSelectedPriceRange,
    INITIAL_MIN_PRICE_VALUE,
    INITIAL_MAX_PRICE_VALUE,
  } = props;

  const { products } = useContext(ProductContext);

  // Get all distinct tags from products
  const setTags = new Set();
  products.forEach((product) => {
    product.tags.forEach((tags) => setTags.add(tags));
  });
  const uniqueTags = [...setTags];

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectedTags([...selectedTags, e.target.value]);
    } else {
      setSelectedTags(selectedTags.filter((tags) => tags !== e.target.value));
    }
  };

  // "event" IS NEEDED HERE FOR PROPER WORKING
  const handlePriceRangeChange = (event, newPriceRange) => {
    setSelectedPriceRange(newPriceRange);
  };

  const validateMinPriceInput = (e) => {
    let value = parseInt(e.target.value, 10);
    value = clampValue(value, INITIAL_MIN_PRICE_VALUE, INITIAL_MAX_PRICE_VALUE);
    value = clampValue(value, INITIAL_MIN_PRICE_VALUE, selectedPriceRange[1]);
    setSelectedPriceRange([value, selectedPriceRange[1]]);
  };

  const validateMaxPriceInput = (e) => {
    let value = parseInt(e.target.value, 10);
    value = clampValue(value, INITIAL_MIN_PRICE_VALUE, INITIAL_MAX_PRICE_VALUE);
    value = clampValue(value, selectedPriceRange[0], INITIAL_MAX_PRICE_VALUE);
    setSelectedPriceRange([selectedPriceRange[0], value]);
  };

  const clampValue = (value, min, max) => {
    if (isNaN(value)) {
      value = min;
    }
    if (value > max) value = max;
    if (value < min) value = min;
    return value;
  };

  return (
    <ProductContextProvider>
      <StyledFilterBox>
        <StyledFilterHider>
          {/*Searchbar*/}
          <div style={{ padding: "10px" }}>
            <form>
              <TextField
                id="outlined-search"
                label="Search something..."
                variant="outlined"
                onChange={props.handleSearch}
                style={{ width: "100%" }}
              />
            </form>
          </div>
          {/*TagSelector*/}
          <div style={{ padding: "10px" }}>
            <div>Tags:</div>
            <div style={{ width: "100%" }}>
              {uniqueTags.map((tags) => (
                <div
                  key={tags}
                  style={{ display: "inline-block", margin: "10px" }}
                >
                  <input
                    type="checkbox"
                    value={tags}
                    checked={selectedTags.includes(tags)}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={tags}>{tags}</label>
                </div>
              ))}
            </div>
          </div>
          {/** Price range /*/}
          <div style={{ width: "90%", padding: "15px" }}>
            <h3>Price range</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                id="outlined-min"
                label="Min price"
                type="number"
                variant="outlined"
                value={selectedPriceRange[0]}
                style={{ width: "35%" }}
                onChange={(e) => {
                  validateMinPriceInput(e);
                }}
              />
              <label
                style={{ width: "50%", height: "50px", margin: "0px 10px" }}
              ></label>
              <TextField
                id="outlined-max"
                label="Max price"
                type="number"
                variant="outlined"
                value={selectedPriceRange[1]}
                style={{ width: "35%" }}
                onChange={(e) => {
                  validateMaxPriceInput(e);
                }}
              />
            </div>
            <div>
              <Slider
                getAriaLabel={() => "Price Range"}
                value={selectedPriceRange}
                valueLabelDisplay="auto"
                onChange={handlePriceRangeChange}
                min={INITIAL_MIN_PRICE_VALUE}
                max={INITIAL_MAX_PRICE_VALUE}
                disableSwap
              />
            </div>
          </div>
        </StyledFilterHider>
      </StyledFilterBox>
    </ProductContextProvider>
  );
};

export default Filter;
