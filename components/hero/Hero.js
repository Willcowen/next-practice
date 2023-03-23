import Image from "next/image";
import Link from "next/link";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div>
        <Image
          src="/images/hero-example.jpg"
          width={900}
          height={600}
          alt="clothes store image"
          quality={100}
        />
        <Link href="/products">
          <button className={classes.button}>SHOP NOW</button>
        </Link>
      </div>
      <div>
        <Image
          src="/images/hero-example-2.jpg"
          width={900}
          height={600}
          alt="two people in a clothes store"
          quality={100}
        />
      </div>
    </section>
  );
};

export default Hero;
