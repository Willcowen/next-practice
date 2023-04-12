import BasketItem from "./BasketItem";
import classes from "./BasketItems.module.css";

const BasketItems = ({ items }) => {
  return (
    <div className={classes.container}>
      <div className={classes.subtitle}>
        <h3>item description</h3>
        <h3>price</h3>
      </div>
      <div className={classes.basketcontainer}>
        <ul>
          {items.map((item) => (
            <BasketItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BasketItems;
