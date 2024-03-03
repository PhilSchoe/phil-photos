import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={`${styles.headerContent} ${styles.headerBorder}`}>
      <button className={styles.button} type="button">
        Add Images
      </button>
      <div className={styles.title}>Phil-Photos</div>
      <div>
        <button className={styles.button} type="button">
          Sign In
        </button>
        <button className={styles.button} type="button">
          Sign Up
        </button>
      </div>
    </div>
  );
}
