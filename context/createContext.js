import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const addToBasket = (product) => {
    setBasket((prev) => [...prev, product]);
  };
  const removeFromBasket = (product) => {
    setBasket((prev) => prev.filter((item) => item.id !== product.id));
  };

  const context = {
    addToCart: addToBasket,
    removeFromCart: removeFromBasket,
    cart: basket,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
