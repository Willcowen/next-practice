import { getData } from "../../../helpers/getData";
import FeaturedProducts from "../../../components/products/FeaturedProducts";

const AllProductsPage = ({ products }) => {
  return <FeaturedProducts products={products} />;
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
