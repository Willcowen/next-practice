import classes from "./ListItem.module.css";
import Image from "next/legacy/image";
import Link from "next/link";
import { useDispatch } from 'react-redux';

const ListItem = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <li className={classes.listitem} key={"item__" + product.id}>
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
