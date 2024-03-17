import React from "react";
import why from "../assets/why.jpg";
import { TbWorldSearch } from "react-icons/tb";
import { CiLock } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

const WhyVantage = () => {
  return (
    <div
      className="mt-10 p-5 w-full bg-center bg-fixed"
      style={{ backgroundImage: `url(${why})` }}
    >
      <div className="p- container mx-auto flex items-center flex-col">
        <div className="bg-gray-200 p-3 rounded-lg">
          <h1 className="text-xl font-montserrat">
            Hear what they say about us
          </h1>
        </div>
        <div className="border-black mt-10 p-6 rounded-lg bg-gradient-to-r from-purple-300 to-blue-400 bg-opacity-85 md:w-[60%] w-[100%]">
          <div className="mt-3 w-full">
            <div className="flex justify-between gap-10 lg:flex-row flex-col">
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3 shadow-lg">
                <MdOutlineExplore size={30} />
                <p>Explore Opportunities</p>
              </div>
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3 shadow-lg">
                <TbWorldSearch size={30} />
                <p>Research and Analyze</p>
              </div>
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3 shadow-lg">
                <MdOutlineSupportAgent size={30} />
                <p>Connect with Experts</p>
              </div>
            </div>
            <div className="flex justify-between mt-6 gap-10 lg:flex-row flex-col">
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3 shadow-lg">
                <CiLock size={30} />
                <p>Secure Your Investment</p>
              </div>
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3 shadow-lg">
                <FaChalkboardTeacher size={30} />
                <p>Track Your Portfolio</p>
              </div>
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3 shadow-lg">
                <LuLayoutDashboard size={30} />
                <p>Portfolio Diversification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVantage;
