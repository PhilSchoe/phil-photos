"use client";
import { useState } from "react";
import ButtonGroup from "./components/button/buton-group";
import Button from "./components/button/button";
import styles from "./header.module.scss";
import { useRouter } from "next/navigation";
import Modal from "./components/modal/modal";

export default function Header() {
  const router = useRouter();

  const buttonProps = [
    { title: "Home", onClick: () => router.push("/") },
    { title: "Create Project", onClick: () => router.push("/create-project") },
  ];

  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  return (
    <div className={`${styles.Header} ${styles.headerBorder}`}>
      <div className={styles["Header--left"]}>
        <div>
          <ButtonGroup buttonProps={buttonProps} />
        </div>
      </div>

      <div className={styles["Header--title"]}>Phil-Photos</div>

      <div className={styles["Header--right"]}>
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
          onClick={() => {
            setShowSignUp(true);
          }}
        />
      </div>
      <Modal show={showSignUp} handleClose={() => setShowSignUp(false)}>
        <h1>Sign Up!</h1>
      </Modal>
    </div>
  );
}
