import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-around mt-5 mb-5">
      <h1 className="text-xs font-bold text-white mt-7 sm:mt-4 sm:text-4xl">
        <a href="/">Honestly-Nvrmind</a>
      </h1>
      <div className="flex gap-2 sm:gap-9 mt-5">
        <div className="flex text-xs sm:text-lg text-white list-none gap-2 sm:gap-9 mt-2 sm:mt-0.5 ">
          <li className="transition-text duration-200 hover:text-yellow-300">
            <Link to="categories">CATEGORIES</Link>
          </li>
          <li className="transition-text duration-200 hover:text-yellow-300">
            <Link to="fashion">FASHION</Link>
          </li>
        </div>
        <div>
        <Link to="/signin">
          <button className="bg-white text-xs w-20 rounded h-7 transition-bg duration-200 hover:bg-yellow-300">
          SIGN IN
          </button>
          </Link>
        </div>
        <div>
        <Link to="/signup">
          <button className="bg-white text-xs w-20 rounded h-7 transition-bg duration-200 hover:bg-yellow-300">
          SIGN UP
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;