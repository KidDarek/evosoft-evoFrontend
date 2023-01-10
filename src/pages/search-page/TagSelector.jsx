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
      <div style={{ padding: "10px" }}>
        <div>Tags:</div>
        <div style={{ width: "15%" }}>
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
        </div>
      </div>
    </>
  );
};

export default TagSelector;
