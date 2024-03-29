import { ImageItem } from "../lib/imageItem";
import Image from "next/image";
import styles from "./imageCard.module.css";

export default function ImageCard({ url, title }: ImageItem) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={url}
        alt="Card Image"
        width="200"
        height="200"
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
}
