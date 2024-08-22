import styles from "./modal.module.scss";

export interface ModalProps {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ show, handleClose, children }: ModalProps) {
  const showHideClassName = show
    ? `${styles["modal"]} ${styles["display-block"]}`
    : `${styles["modal"]} ${styles["display-none"]}`;

  return (
    <div className={showHideClassName}>
      <section className={styles["modal-main"]}>
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}
