import React, { createContext, useState, useEffect } from "react";

const CartItemsContext = createContext();

const CartItemsContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems =
      JSON.parse(localStorage.getItem("shoppingItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  const addToCart = (product) => {
    const id = product.id;
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      // Item already exists in the cart, handle accordingly (e.g., show a message)
      return;
    }

    const newItem = { id, quantity: product.quantity };
    const updatedCartItems = [...cartItems, newItem];
    setCartItems(updatedCartItems);
    localStorage.setItem("shoppingItems", JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("shoppingItems", JSON.stringify(updatedCartItems));
  };

  const removeAllFromCart = () => {
    setCartItems([]);
    localStorage.removeItem("shoppingItems");
  };

  return (
    <CartItemsContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export { CartItemsContext, CartItemsContextProvider };
