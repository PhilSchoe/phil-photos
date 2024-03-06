import ImageCard from "./imageCard";
import styles from "./imageGallery.module.css";

export default function ImageGallery() {
  const images = [];

  for (let i = 0; i < 6; i++) {
    images.push(
      <ImageCard
        id={i}
        url={"https://picsum.photos/20" + i}
        title={"Title: " + i}
      />
    );
  }

  return <div className={styles.imageGallery}>{images}</div>;
}
