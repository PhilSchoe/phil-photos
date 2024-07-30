import styles from "./header.module.css";
import { AnchorGroup } from "./components/anchor/anchor-group";
import { AnchorProps } from "./components/anchor/anchor-props";

export default function Header() {
  const anchorProps: AnchorProps[] = [
    {
      title: "Home",
      href: "./",
    },
    {
      title: "Create Project",
      href: "./create-project",
    },
  ];

  return (
    <div className={`${styles.headerContent} ${styles.headerBorder}`}>
      <AnchorGroup anchorProps={anchorProps}></AnchorGroup>
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
