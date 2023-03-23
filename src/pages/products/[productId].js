import { getData } from "../../../helpers/getData";

const IndividualProductPage = ({ loadedProduct }) => {
  return (
    <>
      <h1>Individual Product Page</h1>
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
