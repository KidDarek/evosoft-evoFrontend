import React, { Fragment } from "react";
import { products } from "../../db";

const TagSelector = (props) => {
  const tags = new Set();

  products.forEach((item) => {
    item.tag.forEach((tag) => tags.add(tag));
  });

  const uniqueTags = [...tags];

  return (
    <>
      <div>Tags:</div>
      {uniqueTags.map((tag) => (
        <div key={tag} style={{ display: "inline-block", margin: "10px" }}>
          <input
            type="checkbox"
            id={tag}
            value={tag}
            onChange={() => props.onSelect(tag)}
          />
          <label htmlFor={tag}>{tag}</label>
        </div>
      ))}
    </>
  );
};

export default TagSelector;
