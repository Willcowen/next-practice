import { getData } from "../../../helpers/getData";
import ListItem from "../../../components/products/ListItem";
import classes from "../../styles/IndividualProductPage.module.css";
import ImageGrid from "../../../components/products/ImageGrid";

const IndividualProductPage = ({ loadedProduct }) => {
  return (
    <div className={classes.container}>
      <div>
        <h1>{loadedProduct.title}</h1>
        <ImageGrid images={loadedProduct.image} title={loadedProduct.title} />
      </div>
      <div>
        <p>{loadedProduct.description}</p>
        <p>{loadedProduct.price}</p>
        <button className={classes.button}>ADD TO BASKET</button>
      </div>
    </div>
  );
};

export default IndividualProductPage;

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);
  console.log("looking here:", product);
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { productId: id } }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
