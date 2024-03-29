import Image from "next/image";
import styles from "./page.module.css";
import ImageGallery from "../ui/imageGallery";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageGallery />
    </main>
  );
}
