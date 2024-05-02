import styles from "./button.module.scss";

type ButtonType = "button" | "submit";

interface ButtonProps {
  title: string;
  type: ButtonType;
  isActive?: boolean;
  isEnabled?: boolean;
  onClick: () => void;
}

export default function Button({
  title,
  type,
  isActive = false,
  isEnabled = true,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={
        isActive
          ? `${styles["Button"]} ${styles["Button--is-active"]}`
          : styles["Button"]
      }
      type={type}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
}
