import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <button className={styles.button} type="button">
        Add Images
      </button>
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
