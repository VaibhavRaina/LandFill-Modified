import React from "react";
import { Link } from "react-router-dom";
import { TypewriterEffect } from "./typewriter";

function Landing() {
  const words = [
    {
      text: "Need ",
    },
    {
      text: "Land",
    },
    {
      text: "for",
    },
    {
      text: "events?",
    },
    {
      text: "Know more",
      className: "text-green-600 dark:text-green-500",
    },
  ];
  return (
    <div className="">
      <img
        src="/landing2.jpg"
        alt="home-image"
        width={window.innerWidth}
        height={window.innerHeight / 2}
        style={{ height: `${window.innerHeight}px` }}
        className="blur-sm object-cover"
      />
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-semibold text-black">
        <TypewriterEffect words={words} />
      </div>
    </div>
  );
}

export default Landing;
