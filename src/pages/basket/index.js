import { useContext, useState, useEffect } from "react";
import BasketItems from "../../../components/basket/BasketItems";
import { CartContext } from "../../../context/createContext";

const BasketPage = () => {
  const { cart } = useContext(CartContext);
  const [basket, setBasket] = useState(cart);


  useEffect(() => {
    setBasket(cart);
  }, [cart]);

  return (
    <div>
      <h1>Basket</h1>
      <div>
        <BasketItems items={basket} />
      </div>
    </div>
  );
};

export default BasketPage;
