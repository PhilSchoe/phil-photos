import styles from "./page.module.css";

export default function createProject() {
  return (
    <div className={styles.container}>
      <div className={styles.projectLayout}>Image Placement</div>
      <div className={styles.uploadArea}>Upload area</div>
    </div>
  );
}
