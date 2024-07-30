export interface ButtonProps {
  title: string;
  onClick?: () => {};
}

export default function Button({ title, onClick }: ButtonProps) {
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return <button onClick={() => handleClick()}>{title}</button>;
}
