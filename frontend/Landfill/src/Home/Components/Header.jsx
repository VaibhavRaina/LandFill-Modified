import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="fixed w-screen h-18 flex z-10 bg-white ">
      <div className="p-5 pl-9">
        <div className=" font-bold text-3xl text-black hover:text-green-500">
          <a href="/">LandFill</a>
        </div>
      </div>
      <div className=" absolute right-7 top-3 ">
        <Link to="/signin">
          <button className="px-8 py-2 rounded-md bg-green-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
