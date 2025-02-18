"use client";
import React from "react";
import { ReactTyped } from "react-typed";

const TypingEffect = () => {
  return (
    <div>
      <h1>
        I have a{" "}
        <ReactTyped
          strings={["Dog", "Fish", "Cat", "Bird"]}
          typeSpeed={50}
          backSpeed={25}
          loop
        />
      </h1>
    </div>
  );
};

export default TypingEffect;
