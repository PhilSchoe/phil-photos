"use client";
import styles from "./anchor.module.css";
import { AnchorProps } from "./anchor-props";

export function Anchor({ title, isSelected, href, onClick }: AnchorProps) {
  let style = styles["anchor"];
  if (isSelected) {
    style += " " + styles["anchor--is-selected"];
  }

  return (
    <a onClick={(e) => onClick!(e)} href={href} className={style}>
      {title}
    </a>
  );
}
