import classes from "./FeaturedProducts.module.css";
import ListItem from "./ListItem";

const ProductList = ({ products }) => {
  return (
    <ul className={classes.featured}>
      {products.map((product, index) => (
        <ListItem product={product} key={index} />
      ))}
    </ul>
  );
};

export default ProductList;
