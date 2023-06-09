import MetaHelmet from "../MetaHelmet";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <MetaHelmet />
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
