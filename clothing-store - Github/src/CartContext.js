import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(() => {
    const savedCount = parseInt(localStorage.getItem("cartCount"), 10);
    return isNaN(savedCount) ? 0 : savedCount;
  });

  const addToCart = (quantity) => {
    const newCartCount = cartCount + quantity;
    setCartCount(newCartCount);
    localStorage.setItem("cartCount", newCartCount);
  };

  const resetCart = () => {
    setCartCount(0);
    localStorage.setItem("cartCount", 0);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
