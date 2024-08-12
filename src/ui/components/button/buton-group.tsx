import { useState } from "react";
import Button, { ButtonProps } from "./button";

export default function ButtonGroup({
  buttonProps,
}: {
  buttonProps: ButtonProps[];
}) {
  const [activeId, setActiveId] = useState<number>(0);

  function handleClick(buttonClick: () => void, activeId: number) {
    buttonClick();
    setActiveId(activeId);
  }
  return (
    <div>
      {buttonProps.map((props: ButtonProps, i) => (
        <Button
          title={props.title}
          theme="selective"
          isActive={activeId === i}
          onClick={() => handleClick(props.onClick, i)}
          key={i}
        />
      ))}
    </div>
  );
}
