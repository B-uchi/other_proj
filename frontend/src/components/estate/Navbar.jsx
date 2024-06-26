import React, { useState } from "react";
import MenuItem from "./MenuItem";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { AiOutlineGold } from "react-icons/ai";
import { FaHouse } from "react-icons/fa6";
import { IoBarChart } from "react-icons/io5";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = ({ showNavbar }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowMobileMenu(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    setShowMenu(false);
  };

  const style = showNavbar
    ? "w-full p-3 h-fit bg-white shadow-md border-b-[1px] border-[#efefef] -z-20"
    : "w-full p-3 h-[8vh] bg-transparent";

  return (
    <nav className={style}>
      <div className="mx-auto relative px-4 flex justify-between items-center w-full">
        <button className="flex items-center gap-3 z-40" onClick={toggleMenu}>
          <h1 className="font-montserrat font-extrabold text-xl">PROJECT</h1>
          <div>{!showMenu ? <FaChevronDown /> : <FaChevronUp />}</div>
        </button>
        <ul className="md:flex z-40 gap-10 hidden">
          <li className="cursor-pointer">
            <a href="/" target="_parent">
              <MenuItem text={"Home"} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="/listings" target="_parent">
              {" "}
              <MenuItem text={"Listings"} />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="/how-it-works">
              <MenuItem text={"How It Works"} />
            </a>
          </li>
          <li className="cursor-pointer">
            <MenuItem text={"About"} />
          </li>
        </ul>
        <div className="z-40 md:flex hidden">
          <button className="bg-gray-200 hover:scale-105 transition-all bg-opacity-75 rounded-lg px-2 p-2">
            Get Started
          </button>
        </div>
        <div className="md:hidden z-40">
          <button onClick={toggleMobileMenu}>
            {showMobileMenu ? (
              <IoClose size={28} color="red" />
            ) : (
              <IoMenu size={28} />
            )}
          </button>
        </div>
        {showMobileMenu && (
          <div className="absolute top-[180%] z-40 left-0 p-5 bg-white w-full">
            <ul className="gap-4 flex flex-col items-center">
              <li className="cursor-pointer">
                <a href="/" target="_parent">
                  <MenuItem text={"Home"} />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="/listings" target="_parent">
                  {" "}
                  <MenuItem text={"Listings"} />
                </a>
              </li>
              <li className="cursor-pointer">
                <a href="/how-it-works">
                  <MenuItem text={"How It Works"} />
                </a>
              </li>
              <li className="cursor-pointer">
                <MenuItem text={"About"} />
              </li>
              <button className="bg-gray-200 hover:scale-105 transition-all bg-opacity-75 rounded-lg px-2 p-2">
                Get Started
              </button>
            </ul>
          </div>
        )}
        {showMenu && (
          <div className="p-3 absolute top-[150%] rounded-md left-0 bg-[#ffffff] border-[1px] border-[#efefef]  z-40 w-[220px] text-md">
            <ul>
              <li className="p-3 border-b-[1px] font-montserrat  border-b-gray-400">
                <a href="/investments" className="flex items-center gap-2">
                  <IoBarChart size={25} /> Investments
                </a>
              </li>
              <li className="p-3 border-b-[1px] font-montserrat  border-b-gray-400">
                <a href="" className="flex items-center gap-2">
                  <FaHouse size={25} /> Real Estate
                </a>
              </li>
              <li className="p-3 font-montserrat ">
                <a href="/metals" className="flex items-center gap-2">
                  <AiOutlineGold size={25} /> Precious Metals
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
