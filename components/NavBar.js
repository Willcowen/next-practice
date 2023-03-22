import classes from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navlist}>
        <li>
          <Link className={classes.navlistitem} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={classes.navlistitem} href="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className={classes.navlistitem} href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
