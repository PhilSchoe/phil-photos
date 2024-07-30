"use client";
import ButtonGroup from "./components/button/buton-group";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const buttonProps = [
    { title: "Home", onClick: () => router.push("/") },
    { title: "Create Project", onClick: () => router.push("/create-project") },
  ];

  return (
    <div className={`${styles.headerContent} ${styles.headerBorder}`}>
      <div>
        <ButtonGroup buttonProps={buttonProps} />
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
