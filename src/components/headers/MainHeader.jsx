import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="w-full bg-[#1E1E1E] p-5 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold text-white">LOGO</h1>
      </div>
      <div className=" flex gap-5 justify-end items-center text-white font-light">
        <Link>Home</Link>
        <Link to="/about">About us</Link>
        <Link>Portfolio</Link>
        <Link>News</Link>
        <button className="px-5 py-2 ml-9 bg-[#FA9021] rounded-md">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
