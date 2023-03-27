import { useEffect } from "react"
import Data from '../../../data/dummy-backend.json'

const BasketPage = () => {

  useEffect(() => {
    console.log('basket', Data.basket)
  }, []);

  return (
    <div>
      <h1>Basket</h1>

    </div>
  );
};

export default BasketPage;


