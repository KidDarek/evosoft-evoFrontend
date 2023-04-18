import React, { createContext, useState } from "react";
import ProductAPI from "../api/ProductAPI";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const products = await ProductAPI.getAll();
    setProducts(products);
  };

  const getProductById = async (id) => {
    return await ProductAPI.getById(id);
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