import React, { createContext, useState, useEffect } from "react";
import ProductAPI from "../api-implementations/ProductAPI";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await ProductAPI.getAllProducts();
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  async function addProduct(product) {
    const newProduct = await ProductAPI.addProduct(product);
    setProducts([...products, newProduct]);
  }

  async function removeProduct(id) {
    await ProductAPI.removeProductById(id);
    setProducts(products.filter((product) => product.id !== id));
  }

  async function updateProduct(product) {
    const updatedProduct = await ProductAPI.updateProduct(product);
    const newProducts = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(newProducts);
  }

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
