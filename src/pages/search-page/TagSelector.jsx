import { Checkbox, filledInputClasses } from "@mui/material";
import { Grid } from "@mui/material";
import { products } from "../../db";
import React, { Fragment } from "react";
import { display } from "@mui/system";

const ReturnTags = () => {
  const tags = new Set();

  products.forEach((item) => {
    const itemTags = item.tag.slice(1, -1).split(", ");
    itemTags.forEach((tag) => tags.add(tag));
  });

  const uniqueTags = [...tags];

  return (
    <div>
      {uniqueTags.map((tag) => (
        <div key={tag} style={{ display: "inline-block", margin: "10px" }}>
          <input type="checkbox" id={tag} value={tag} />
          <label htmlFor={tag}>{tag}</label>
        </div>
      ))}
    </div>
  );
};

const TagSelector = () => {
  return (
    <>
      <div>Tags:</div>
      <ReturnTags></ReturnTags>
    </>
  );
};

export default TagSelector;
