import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.image}>
      <Image
        src="/images/hero-example.jpg"
        width={900}
        height={600}
        alt="clothes store image"
        quality={100}
      />
    </div>
  );
};

export default Hero;
