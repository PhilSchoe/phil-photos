"use client";

import { useState } from "react";
import { Anchor } from "./anchor";
import { AnchorProps } from "./anchor-props";

export function AnchorGroup({ anchorProps }: { anchorProps: AnchorProps[] }) {
  const [selectedId, setSelectedId] = useState<number>(0);

  function handleClick(event: Event, id: number) {
    console.log("clicked");
    setSelectedId(id);
    //event.preventDefault();
  }

  return (
    <div>
      {anchorProps.map((props, i) => (
        <Anchor
          title={props.title}
          href={props.href}
          isSelected={i == selectedId}
          onClick={(event) => handleClick(event, i)}
          key={i}
        ></Anchor>
      ))}
    </div>
  );
}
