import styles from "./button.module.scss";

export interface ButtonProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

export default function Button({ title, isActive, onClick }: ButtonProps) {
  return (
    <button
      className={
        isActive
          ? `${styles["Button"]} ${styles["Button--is-active"]}`
          : styles["Button"]
      }
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
}
