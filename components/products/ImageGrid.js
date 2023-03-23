import Image from "next/image";
import classes from "./ImageGrid.module.css";

const ImageGrid = ({ images, title }) => {
  console.log("images:", images);
  return (
    <section className={classes.container}>
      {images.map((image, index) => (
        <div>
          <Image
            key={index}
            src={image}
            height={952}
            width={634}
            alt={"Man wearing a " + title}
            priority={true}
          />
        </div>
      ))}
    </section>
  );
};

export default ImageGrid;
