import React, { Fragment, useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
//import { products } from '../../db';
import { products } from "../../db";

const Filter = (props) => {
  // TagSelector
  const tags = new Set();

  products.forEach((item) => {
    item.tag.forEach((tag) => tags.add(tag));
  });

  const uniqueTags = [...tags];
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectedTags([...selectedTags, e.target.value]);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag !== e.target.value));
    }
  };

  // Price range
  let minV = 0;
  let maxV = 9999;

  const [value, setValue] = useState([minV, maxV]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const textFieldInput = () => {
    setValue([
      document.getElementById("outlined-min").value,
      document.getElementById("outlined-max").value,
    ]);
  };

  const setPrices = () => {
    props.setSelectedPrice([value[0], value[1]]);
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
              id="standard-basic"
              label="Search for something"
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
            <button onClick={() => props.onSelect(selectedTags)}>Filter</button>
          </div>
        </div>

        {/** Price range /*/}
        <>
          <div style={{ width: "70%", padding: "15px" }}>
            <h3>Price range</h3>
            <div>
              <TextField
                id="outlined-min"
                label="Min price"
                variant="outlined"
                value={value[0]}
                style={{ width: "35%" }}
                onChange={textFieldInput}
              />
              <button
                style={{ width: "20%", height: "50px", margin: "0px 10px" }}
                onClick={setPrices}
              >
                Filter
              </button>
              <TextField
                id="outlined-max"
                label="Max price"
                variant="outlined"
                value={value[1]}
                style={{ width: "35%" }}
                onChange={textFieldInput}
              />
            </div>
            <div>
              <Slider
                getAriaLabel={() => "Price Range"}
                value={value}
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
