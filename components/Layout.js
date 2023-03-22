import Head from "./MetaHelmet";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <header>
        <h1>laissez-faire</h1>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
