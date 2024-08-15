"use client";
import ButtonGroup from "./components/button/buton-group";
import Button from "./components/button/button";
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
        <Button
          title="Sign In"
          isActive={false}
          theme="trigger"
          onClick={() => {}}
        />
        <Button
          title="Sign Up"
          isActive={false}
          theme="trigger"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
