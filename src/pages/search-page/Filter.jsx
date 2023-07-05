import React, { useContext } from "react";
import Slider from "@mui/material/Slider";
import {
  styled,
  Chip,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import MUIButton from "@mui/material/Button";
import { ProductContext } from "../../context-providers/ProductContext";

const StyledFilterBox = styled("div")({
  backgroundColor: "#00cc99",
  justifyContent: "start",
  marginLeft: "15px",
  marginTop: "83px",
  border: "3px solid #00a568",
  width: "23%",
  height: "100%",
  color: "white",
  padding: "0.4%",
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

const StyledDivWithPadding = styled("div")({
  padding: "0px 15px 15px 15px",
});

const Filter = (props) => {
  const {
    selectedTags,
    setSelectedTags,
    selectedPriceRange,
    setSelectedPriceRange,
    INITIAL_MIN_PRICE_VALUE,
    INITIAL_MAX_PRICE_VALUE,
    sortBy,
    setSortBy,
    descending,
    setDescending,
  } = props;

  const { products } = useContext(ProductContext);
  const navigateToAddProductPage = () => {
    navigate(`/AddProduct`);
  };
  const navigate = useNavigate();

  // Get all distinct tags from products
  const setTags = new Set();
  products.forEach((product) => {
    product.tags.forEach((tags) => setTags.add(tags));
  });
  const uniqueTags = [...setTags];

  const handleCheckboxChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

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

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleDescendingChange = (e) => {
    setDescending(e.target.checked);
  };

  const isSortingNone = sortBy === "";

  return (
    <StyledFilterBox>
      <StyledFilterHider>
        {/*Searchbar*/}
        <StyledDivWithPadding>
          <h3>Search</h3>
          <form>
            <TextField
              id="outlined-search"
              label="Search something..."
              variant="outlined"
              onChange={props.handleSearch}
              style={{ width: "100%" }}
              InputLabelProps={{
                sx: { color: "white" },
              }}
            />
          </form>
        </StyledDivWithPadding>
        {/*TagSelector*/}
        <StyledDivWithPadding>
          <h3>Tags:</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {uniqueTags.map((tag) => (
              <div key={tag}>
                <Chip
                  label={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outlined"}
                  onClick={() => handleCheckboxChange(tag)}
                  style={{ color: "white", borderColor: "grey" }}
                />
                <Checkbox
                  id={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleCheckboxChange(tag)}
                  style={{ display: "none" }}
                />
              </div>
            ))}
          </div>
        </StyledDivWithPadding>
        {/** Price range /*/}
        <div style={{ padding: "15px" }}>
          <h3>Price range</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              id="outlined-min"
              label="Min price"
              type="number"
              variant="outlined"
              value={selectedPriceRange[0]}
              style={{ width: "35%", color: "white" }}
              onChange={(e) => {
                validateMinPriceInput(e);
              }}
              InputLabelProps={{
                sx: { color: "white" },
              }}
              InputProps={{
                sx: {
                  color: "white",
                },
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
              InputLabelProps={{
                sx: { color: "white" },
              }}
              InputProps={{
                sx: {
                  color: "white",
                },
              }}
            />
          </div>
          <StyledDivWithPadding>
            <h3>Tags</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {uniqueTags.map((tag) => (
                <div key={tag}>
                  <Chip
                    label={tag}
                    variant={
                      selectedTags.includes(tag) ? "default" : "outlined"
                    }
                    onClick={() => handleCheckboxChange(tag)}
                    style={{ color: "white", borderColor: "grey" }}
                  />
                  <Checkbox
                    id={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleCheckboxChange(tag)}
                    style={{ display: "none" }}
                  />
                </div>
              ))}
            </div>
          </StyledDivWithPadding>
          {/** Price range /*/}
          <StyledDivWithPadding>
            <h3>Price range</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                id="outlined-min"
                label="Min price"
                type="number"
                variant="outlined"
                value={selectedPriceRange[0]}
                style={{ width: "35%", color: "white" }}
                onChange={(e) => {
                  validateMinPriceInput(e);
                }}
                InputLabelProps={{
                  sx: { color: "white" },
                }}
                InputProps={{
                  sx: {
                    color: "white",
                  },
                }}
              />
              <label style={{ width: "40%" }}></label>
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
                InputLabelProps={{
                  sx: { color: "white" },
                }}
                InputProps={{
                  sx: {
                    color: "white",
                  },
                }}
              />
            </div>
            <div style={{ padding: "10px" }}>
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
          </StyledDivWithPadding>
          {/* Sorting */}
          <StyledDivWithPadding>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FormControl
                variant="outlined"
                sx={{ minWidth: 180, marginRight: "16px" }}
              >
                <InputLabel id="sort-by-label">Sort By</InputLabel>
                <Select
                  labelId="sort-by-label"
                  id="sort-by-select"
                  value={sortBy}
                  onChange={handleSortByChange}
                  label="Sort By"
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="name">Name</MenuItem>
                  <MenuItem value="price">Price</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!isSortingNone && descending}
                    onChange={handleDescendingChange}
                    disabled={isSortingNone}
                    id="descending-checkbox"
                  />
                }
                label="Descending"
                htmlFor="descending-checkbox"
                style={{ marginLeft: "auto" }}
              />
            </div>
          </StyledDivWithPadding>
          {/*New product*/}
          <div style={{ padding: "15px" }}>
            <MUIButton
              variant="contained"
              onClick={() => navigateToAddProductPage()}
            >
              {" "}
              Add new product{" "}
            </MUIButton>
          </div>
        </div>
      </StyledFilterHider>
    </StyledFilterBox>
  );
};

export default Filter;
