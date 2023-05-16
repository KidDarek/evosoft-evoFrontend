import React, { createContext, useState, useEffect } from "react";
import ProductAPI from "../api/ProductAPI";

export const ProductContext = createContext({ products: [] });

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const products = await ProductAPI.getAll();
    setProducts(products);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getProductById = async (id) => {
    const product = await ProductAPI.getById(id);
    return product;
  };

  const addProduct = async (product) => {
    await ProductAPI.add(product);
    getAllProducts();
  };

  const removeProduct = async (id) => {
    await ProductAPI.remove(id);
    getAllProducts();
  };

  const updateProduct = async (product) => {
    await ProductAPI.update(product);
    getAllProducts();
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getAllProducts,
        getProductById,
        addProduct,
        removeProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
