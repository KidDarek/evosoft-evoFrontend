import React, { createContext, useState, useEffect } from "react";
import { products } from "./db";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "backend") {
      setProductsData(products);
    } else {
      fetch("http://localhost:5001/getProducts")
        .then((response) => response.json())
        .then((data) => setProductsData(data));
    }
  }, []);

  return (
    <ProductContext.Provider value={productsData}>
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
