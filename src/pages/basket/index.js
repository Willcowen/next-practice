import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/createContext";

const BasketPage = () => {
  const [basket, setBasket] = useState([]);
  console.log(useContext(CartContext));

  const { cart } = useContext(CartContext);

  useEffect(() => {
    setBasket(cart);
  }, [cart]);

  console.log('basket', basket)

  console.log("cart", cart);
  return (
    <div>
      <h1>Basket</h1>
      <div>
        <ul>
          {basket.map((item) => {
            <li>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default BasketPage;
