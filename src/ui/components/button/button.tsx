import styles from "./button.module.scss";

type Themes = "selective";

export interface ButtonProps {
  title: string;
  theme?: Themes;
  isActive?: boolean;
  onClick: () => void;
}

export default function Button({
  title,
  theme,
  isActive,
  onClick,
}: ButtonProps) {
  const buttonStyle = `${styles["Button"]} ${styles[`Button--${theme}`]}`;
  const selectedButtonStyle = `${buttonStyle} ${
    styles[`Button--${theme}--is-active`]
  }`;

  return (
    <button
      className={isActive ? selectedButtonStyle : buttonStyle}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
}
