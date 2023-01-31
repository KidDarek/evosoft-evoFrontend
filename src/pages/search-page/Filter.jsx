import React, { useState } from "react";
import TagSelector from "./TagSelector";
import PriceRange from "./PriceRange";
import { products } from "../../db";

const Filter = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([0, 9999]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleTagSelection = (tags) => {
    setSelectedTags(tags);
    filterProducts();
  };

  const filterProducts = () => {
    let filtered = products.filter(
      (product) =>
        product.price >= selectedPrice[0] && product.price <= selectedPrice[1]
    );
    if (selectedTags.length > 0) {
      filtered = filtered.filter((product) => {
        let found = false;
        product.tag.forEach((tag) => {
          if (selectedTags.includes(tag)) {
            found = true;
            return;
          }
        });
        return found;
      });
    }
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <TagSelector onSelect={handleTagSelection} />
      <PriceRange
        setSelectedPrice={setSelectedPrice}
        filterProducts={filterProducts}
      />
      <button onClick={filterProducts}>Filter</button>
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
