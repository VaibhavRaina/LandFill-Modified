import React from "react";
import { Link } from "react-router-dom";
import { TypewriterEffect } from "./typewriter";
import SearchBar from "./SearchBar";

function Landing() {
  return (
    <div className="bg-gray-100 w-screen h-screen flex">
      <div className="flex flex-col font-bold text-gray-700 absolute top-[100px] p-6">
        <div className="text-7xl">
          Get Land Instantly
          <br /> to Organize your
          <br />
          events!
        </div>
        <div className=" font-semibold text-2xl pt-4">
          Whether you want to rent land for a wedding, party,
          <br /> or you need land for a short-term event,
          <br />
          we've got you covered.
        </div>
        <div className="pt-10">
          <SearchBar />
        </div>
      </div>
      <div>
        <img
          src="/map.svg"
          alt="hotel"
          height={900}
          width={900}
          className="absolute right-[70px] top-[-50px] "
        />
      </div>
    </div>
  );
}

export default Landing;
