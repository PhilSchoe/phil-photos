import Button, { ButtonProps } from "./button";

export default function ButtonGroup({
  buttonProps,
}: {
  buttonProps: ButtonProps[];
}) {
  return (
    <div>
      {buttonProps.map((props: ButtonProps) => (
        <Button title={props.title} />
      ))}
    </div>
  );
}
