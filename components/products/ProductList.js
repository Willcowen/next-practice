import classes from "./FeaturedProducts.module.css";
import ListItem from "./ListItem";

const ProductList = ({ products }) => {
  return (
    <ul className={classes.featured}>
      {products.map((product) => (
        <ListItem product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
