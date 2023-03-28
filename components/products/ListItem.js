import { useContext } from "react";
import classes from "./ListItem.module.css";
import Image from "next/legacy/image";
import Link from "next/link";
import { CartContext } from "../../context/createContext";

const ListItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <li className={classes.listitem} key={"item__" + product.id}>
      <div className={classes.productcontainer}>
        <div className={classes.imagecontainer}>
          <Link href={"/products/" + product.id}>
            <Image
              src={product.image[0]}
              height={952}
              width={634}
              alt={product.title}
              priority={true}
            />
          </Link>
        </div>
        <div className={classes.productinfo}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button className={classes.button} onClick={() => addToCart(product)}>
            ADD TO BASKET
          </button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
