import { getProducts } from "../api/index";
import ProductList from "../../../components/products/ProductList";
import classes from "../../styles/AllProductsPage.module.css";

const AllProductsPage = ({ products }) => {
  return (
    <div className={classes.container}>
      <h1>All Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default AllProductsPage;

export async function getStaticProps() {
  const data = await getProducts();

  return {
    props: {
      products: data.map((product) => ({
        id: product._id.toString(),
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
      })),
    },
    revalidate: 10,
  };
}
