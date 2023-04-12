import { useContext, useState, useEffect } from "react";
import BasketItems from "../../../components/basket/BasketItems";
import { CartContext } from "../../../context/createContext";
import classes from "../../styles/BasketPage.module.css";

const BasketPage = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const [basket, setBasket] = useState(cart);

  useEffect(() => {
    setBasket(cart);
  }, [cart]);

  

  return (
    <div>
      <h1 className={classes.title}>Basket</h1>
      <div>
        <BasketItems items={basket} />
      </div>
      <div className={classes.total}>{`Total: £${getTotalPrice()}`}</div>
    </div>
  );
};

export default BasketPage;
