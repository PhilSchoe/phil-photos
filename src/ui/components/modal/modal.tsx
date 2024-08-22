import styles from "./modal.module.scss";

export interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ show, handleClose, children }: ModalProps) {
  const showHideClassName = show
    ? `${styles["Modal"]} ${styles["Modal--display-block"]}`
    : `${styles["Modal"]} ${styles["Modal--display-none"]}`;

  return (
    <div className={showHideClassName}>
      <section className={styles["Modal__content"]}>
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}
