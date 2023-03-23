import MetaHelmet from "../MetaHelmet";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <MetaHelmet />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
