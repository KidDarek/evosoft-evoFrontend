import { products } from "../../db";
import React, { Fragment } from "react";

const ReturnTags = (props) => {
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
          <input type="checkbox" id={tag} value={tag} onChange={() => props.HandleChange(tag)} />
          <label htmlFor={tag}>{tag}</label>
        </div>
      ))}
    </div>
  );
};

const TagSelector = (props) => {
  return (
    <>
      <div>Tags:</div>
      <ReturnTags HandleChange={props.HandleChange}></ReturnTags>
    </>
  );
};

export default TagSelector;
