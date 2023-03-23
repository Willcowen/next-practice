import classes from "./FeaturedProducts.module.css";
import Image from "next/image";
const FeaturedProducts = ({ products }) => {
  return (
    <section>
      <ul className={classes.featured}>
        {products.map((product) => (
          <li className={classes.listitem} key={product.id}>
            <div className={classes.productcontainer}>
              <div className={classes.imagecontainer}>
                <Image
                  src={product.image}
                  height={952}
                  width={634}
                  alt={product.title}
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProducts;
