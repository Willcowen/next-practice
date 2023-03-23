import Link from "next/link";
import classes from "./Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link href="/">
          <h1 className={classes.title}>laissez-faire</h1>
          <h3>do as they will</h3>
        </Link>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
