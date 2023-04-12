import Image from "next/image";
import classes from "./BasketItem.module.css";

const BasketItem = ({ item }) => {
  return (
    <li>
      <div className={classes.container}>
        <p>{item.title}</p>
        <div className={classes.imagecontainer}>
          <Image
            src={item.image[0]}
            height={952}
            width={634}
            alt={item.title}
            priority={true}
          />
        </div>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
      </div>
    </li>
  );
};

export default BasketItem;
