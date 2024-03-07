import styles from "./page.module.css";
import Image from "next/image";

export default function createProject() {
  return (
    <div className={styles.container}>
      <div className={styles.projectLayout}>
        <Image
          width={300}
          height={300}
          alt="Placeholder Image"
          src="/vercel.svg"
        />
      </div>

      <div className={styles.uploadArea}>
        <div>Project Title: </div>
        <input type="text" />
        <div>Select Images:</div>
        <input type="file" accept="image/*" />
      </div>
    </div>
  );
}
