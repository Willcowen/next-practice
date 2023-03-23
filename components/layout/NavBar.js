import Image from "next/image";
import classes from "./NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navlist}>
        <li>
          <Link className={classes.navlistitem} href="/">
            <Image src="/home.png" width={30} height={30} alt="home" />
          </Link>
        </li>
        <li>
          <Link className={classes.navlistitem} href="/products">
            <Image src="/tshirt.png" width={30} height={30} alt="products" />
          </Link>
        </li>
        <li>
          <Link className={classes.navlistitem} href="/basket">
            <Image src="/cart.png" width={30} height={30} alt="basket" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
