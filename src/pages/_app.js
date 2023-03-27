import "@/styles/globals.css";
import Layout from "../../components/layout/Layout";
import { CartContextProvider } from "../../context/createContext";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}
