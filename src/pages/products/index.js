import { getData } from "../../../helpers/getData";
import ProductList from "../../../components/products/ProductList";
import classes from "../../styles/AllProductsPage.module.css";

const AllProductsPage = ({ products }) => {
  return (
    <div className={classes.container}>
      <h1>All Products</h1>
      <ProductList products={products} />;
    </div>
  );
};

export default AllProductsPage;

export async function getStaticProps() {
  const data = await getData();

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
