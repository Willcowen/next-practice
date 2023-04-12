import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const addToBasket = (product) => {
    const itemExists = basket.find((item) => item.id === product.id);
    if (itemExists) {
      setBasket((prev) => 
       prev.map((item) => {
          if (item.id === product.id) {
            item.quantity++;
          }
          return item;
        })
      );
    } else {
      setBasket((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };
  const removeFromBasket = (product) => {
    setBasket((prev) => prev.filter((item) => item.id !== product.id));
  };
  
  const getTotalPrice = () => {
    const total = basket.reduce((total, item) => {
      return total + Number(item.price.substring(1) * item.quantity);
    }, 0);

    return total;
  };

  const context = {
    addToCart: addToBasket,
    removeFromCart: removeFromBasket,
    getTotalPrice: getTotalPrice,
    cart: basket,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
