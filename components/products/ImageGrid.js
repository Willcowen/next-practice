import { useState } from "react";
import Image from "next/image";
import classes from "./ImageGrid.module.css";

const ImageGrid = ({ images, title }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(images[0]);

  const handleThumbnailClick = (currentPhoto) => {
    return setSelectedPhoto(currentPhoto);
  };

  return (
    <section className={classes.container}>
      <div className={classes.imagecontainer}>
        <Image
          className={classes.mainimage}
          src={selectedPhoto}
          height={952}
          width={634}
          alt={"Man wearing a " + title}
          priority={true}
        />
        <div className={classes.imageselector}>
          <Image
            onClick={() => handleThumbnailClick(images[0])}
            className={classes.thumbnailimage}
            src={images[0]}
            height={300}
            width={200}
            alt={"Man wearing a " + title}
            priority={true}
          />
          <Image
            onClick={() => handleThumbnailClick(images[1])}
            className={classes.thumbnailimage}
            src={images[1]}
            height={300}
            width={200}
            alt={"Man wearing a " + title}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
