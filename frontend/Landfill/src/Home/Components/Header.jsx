import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-screen h-18 flex z-10 ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="p-5 pl-9">
        <div
          className={`font-bold text-3xl ${
            isScrolled ? "text-green-500" : "text-gray-700"
          } hover:text-green-500`}
        >
          <a href="/">LandFill</a>
        </div>
      </div>
      <div className="absolute right-7 top-3">
        <Link to="/signup">
          <button
            className={`px-8 py-2 rounded-md ${
              isScrolled ? "bg-green-500 text-white" : "bg-white text-green-500"
            } font-bold transition duration-200 hover:bg-white hover:text-green-500 border-2 border-transparent hover:border-teal-500`}
          >
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
