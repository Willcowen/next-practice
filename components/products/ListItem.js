import classes from "./ListItem.module.css";
import Image from "next/image";
import Link from "next/link";

const ListItem = ({ product }) => {
  return (
    <li className={classes.listitem} key={"item_" + product.id}>
      <Link href={"/products/" + product.id}>
        <div className={classes.productcontainer}>
          <div className={classes.imagecontainer}>
            <Image
              src={product.image[0]}
              height={952}
              width={634}
              alt={product.title}
              priority={true}
            />
            <p className={classes.overlay}>VIEW MORE INFO</p>
          </div>
          <div className={classes.productinfo}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button className={classes.button}>ADD TO BASKET</button>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
