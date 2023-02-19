import React, { createContext, useState, useEffect } from "react";
import { productsjs } from "../../db";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "backend") {
      setProducts(productsjs);
    } else {
      fetch("http://localhost:5001/getProducts")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

/* USAGE:
import { useContext } from 'react';
import { ProductContext } from './ProductContext';

const products = useContext(ProductContext);
*/
