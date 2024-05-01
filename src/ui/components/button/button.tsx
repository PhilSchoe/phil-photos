import styles from "./button.module.css";

type ButtonType = "button" | "submit";

interface ButtonProps {
  title: string;
  type: ButtonType;
  isEnabled?: boolean;
  onClick: () => void;
}

export default function Button({
  title,
  type,
  isEnabled = true,
  onClick,
}: ButtonProps) {
  return (
    <button className={styles.button} type={type} onClick={() => onClick()}>
      {title}
    </button>
  );
}
