import React, { Fragment, useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { products } from "../../db";
import Button from "@mui/material/Button";

// Price range
const INITIAL_MIN_VALUE = 0;
const INITIAL_MAX_VALUE = 9999;

const Filter = (props) => {
  // TagSelector
  const tags = new Set();

  products.forEach((item) => {
    item.tag.forEach((tag) => tags.add(tag));
  });

  const uniqueTags = [...tags];

  const [selectedTags, setSelectedTags] = useState([]);
  const [actualPriceRange, setActualPriceRange] = useState([
    INITIAL_MIN_VALUE,
    INITIAL_MAX_VALUE,
  ]);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectedTags([...selectedTags, e.target.value]);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag !== e.target.value));
    }
  };

  const handleChange = (event, newValue) => {
    setActualPriceRange(newValue);
  };

  const textFieldInput = () => {
    setActualPriceRange([
      document.getElementById("outlined-min").value,
      document.getElementById("outlined-max").value,
    ]);
  };

  const setPrices = () => {
    props.setSelectedPrice([actualPriceRange[0], actualPriceRange[1]]);
    props.filterProducts();
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#00cc99",
          justifyContent: "start",
          marginLeft: "10px",
          marginTop: "83px",
          border: "3px solid #00a568",
          width: "30%",
        }}
      >
        {/*Searchbar*/}
        <div style={{ padding: "10px" }}>
          <form onSubmit={props.handleSubmit}>
            <TextField
              id="outlined-search"
              label="Search something..."
              variant="outlined"
              value={props.searchString}
              onChange={props.handleSearch}
              style={{ width: "250px" }}
            />
          </form>
        </div>

        {/*TagSelector*/}
        <div style={{ padding: "10px" }}>
          <div>Tags:</div>
          <div style={{ width: "75%" }}>
            {uniqueTags.map((tag) => (
              <div
                key={tag}
                style={{ display: "inline-block", margin: "10px" }}
              >
                <input
                  type="checkbox"
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={tag}>{tag}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Button */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            style={{ width: "20%", height: "50px", margin: "0px 10px" }}
            onClick={() => {
              props.onSelect(selectedTags);
              setPrices();
            }}
          >
            Filter
          </Button>
        </div>

        {/** Price range /*/}
        <>
          <div style={{ width: "70%", padding: "15px" }}>
            <h3>Price range</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                id="outlined-min"
                label="Min price"
                variant="outlined"
                value={actualPriceRange[0]}
                style={{ width: "35%" }}
                onChange={textFieldInput}
              />
              <label
                style={{ width: "50%", height: "50px", margin: "0px 10px" }}
              ></label>
              <TextField
                id="outlined-max"
                label="Max price"
                variant="outlined"
                value={actualPriceRange[1]}
                style={{ width: "35%" }}
                onChange={textFieldInput}
              />
            </div>
            <div>
              <Slider
                getAriaLabel={() => "Price Range"}
                value={actualPriceRange}
                valueLabelDisplay="auto"
                onChange={handleChange}
                max={9999}
                disableSwap
              />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Filter;
