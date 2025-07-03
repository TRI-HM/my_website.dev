"use client";
import React from "react";
import { ReactTyped } from "react-typed";

type ReactTypedProps = {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
};
const TypingEffect: React.FC<ReactTypedProps> = (props) => {
  return (
    <span>
      <ReactTyped
        strings={props.strings}
        typeSpeed={props.typeSpeed}
        backSpeed={props.backSpeed}
        loop
        cursorChar="_"
      />
    </span>
  );
};

export default TypingEffect;
