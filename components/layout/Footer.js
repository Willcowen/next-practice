import Link from "next/link";
import Image from "next/image";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>Please note: The Images on this site belong to H & M, they are being used for development purposes only.</p>
      <Link href="/contact">
        <Image src="/contact.png" width={20} height={20} alt="contact logo" />
      </Link>
    </footer>
  );
};

export default Footer;
