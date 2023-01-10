import React, { Fragment, useState } from "react";
import { products } from "../../db";

const TagSelector = (props) => {
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

  return (
    <>
      <div>Tags:</div>
      {uniqueTags.map((tag) => (
        <div key={tag} style={{ display: "inline-block", margin: "10px" }}>
          <input
            type="checkbox"
            id={tag}
            value={tag}
            onChange={handleCheckboxChange}
            checked={selectedTags.includes(tag)}
          />
          <label htmlFor={tag}>{tag}</label>
        </div>
      ))}
      <button
        onClick={() => {
          if (selectedTags.length === 0) {
            props.onSelect(uniqueTags);
          } else {
            props.onSelect(selectedTags);
          }
        }}
      >
        Filter
      </button>
    </>
  );
};

export default TagSelector;
