"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("\u2728 Supercharged Productivity.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("\u2728 AI-Powered Insights.")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;