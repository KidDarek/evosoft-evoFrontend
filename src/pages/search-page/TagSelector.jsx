import React, { useState } from "react";
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
    <div>
      {uniqueTags.map((tag) => (
        <div key={tag}>
          <input
            type="checkbox"
            value={tag}
            checked={selectedTags.includes(tag)}
            onChange={handleCheckboxChange}
          />
          <label>{tag}</label>
        </div>
      ))}
      <button onClick={() => props.onSelect(selectedTags)}>Filter</button>
    </div>
  );
};

export default TagSelector;
