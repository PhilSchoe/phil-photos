import { useState } from "react";
import styles from "./anchor.module.css";

export function Anchor({
  title,
  isSelected,
  href,
}: {
  title: string;
  isSelected: boolean;
  href: string;
}) {
  let style = styles["anchor"];
  if (isSelected) {
    style += " " + styles["anchor--is-selected"];
  }

  return (
    <a href={href} className={style}>
      {title}
    </a>
  );
}
