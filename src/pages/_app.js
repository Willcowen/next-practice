import { Provider } from "react-redux";
import "@/styles/globals.css";
import Layout from "../../components/layout/Layout";
import store from "../../redux/store.js"

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
