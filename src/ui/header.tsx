"use client";
import ButtonGroup from "./components/button/buton-group";
import styles from "./header.module.css";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const buttonProps = [{ title: "Home" }, { title: "Create Project" }];

  return (
    <div className={`${styles.headerContent} ${styles.headerBorder}`}>
      <div>
        <ButtonGroup buttonProps={buttonProps} />
        <button
          onClick={() => router.push("/")}
          className={styles.button}
          type="button"
        >
          Home
        </button>
        <button
          onClick={() => router.push("/create-project")}
          className={styles.button}
          type="button"
        >
          Create Project
        </button>
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
