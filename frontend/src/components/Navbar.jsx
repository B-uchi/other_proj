import React from "react";
import MenuItem from "./MenuItem";

const Navbar = () => {
  return (
    <nav className="w-full flex p-3">
      <div className="container mx-auto px-4 flex w-[100vw] items-center justify-between">
        <h1 className="font-montserrat font-extrabold text-xl">PROJECT</h1>
        <ul className="md:flex z-40 gap-10 hidden">
          <li className="cursor-pointer">
            <MenuItem text={"Home"} />
          </li>
          <li className="cursor-pointer">
            <MenuItem text={"Listings"} />
          </li>
          <li className="cursor-pointer">
            <MenuItem text={"How It Works"} />
          </li>
          <li className="cursor-pointer">
            <MenuItem text={"About"} />
          </li>
        </ul>
        <div className="z-40">
          <button className="bg-gray-200 hover:scale-105 transition-all bg-opacity-75 rounded-lg px-2 p-2">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
