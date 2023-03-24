import { getData } from "../../../helpers/getData";
import classes from "../../styles/IndividualProductPage.module.css";
import ImageGrid from "../../../components/products/ImageGrid";

const IndividualProductPage = ({ loadedProduct }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.imagecontainer}>
          <ImageGrid images={loadedProduct.image} title={loadedProduct.title} />
        </div>
        <div className={classes.description}>
          <h3 className={classes.title}>{loadedProduct.title}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* <p>{loadedProduct.description}</p> */}
          <p className={classes.price}>{loadedProduct.price}</p>
          <button className={classes.button}>ADD TO BASKET</button>
        </div>
      </div>
    </>
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
