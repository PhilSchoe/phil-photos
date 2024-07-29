import styles from "./header.module.css";
import { Anchor } from "./components/anchor/anchor";

export default function Header() {
  return (
    <div className={`${styles.headerContent} ${styles.headerBorder}`}>
      <div>
        <Anchor title="Home" href="./" isSelected={true} />
        <Anchor
          title="Create Project"
          href="./create-project"
          isSelected={false}
        />
      </div>
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
