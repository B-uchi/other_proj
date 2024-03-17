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
      className="h- mt-10 w-full bg-center bg-fixed"
      style={{ backgroundImage: `url(${why})` }}
    >
      <div className="p-5 container mx-auto flex items-center flex-col">
        <div className="bg-gray-200 p-3 rounded-lg">
          <h1 className="text-xl font-montserrat font-extrabold">
            Why Vantage?
          </h1>
        </div>

        <div className="w-[80%] mt-6">
          <div className="">
            <div className="flex justify-between gap-10 md:flex-row flex-col">
              <div className="bg-gray-200 md:w-1/3 rounded-lg p-6 flex items-center gap-3 bg-opacity-45">
                <MdOutlineExplore />
                <p>Explore Opportunities</p>
              </div>
              <div className="bg-gray-200 md:w-1/3 rounded-lg p-6 flex items-center gap-3 bg-opacity-45">
                <MdOutlineExplore />
                <p>Explore Opportunities</p>
              </div>
              <div className="bg-gray-200 md:w-1/3 rounded-lg p-6 flex items-center gap-3 bg-opacity-45">
                <MdOutlineExplore />
                <p>Explore Opportunities</p>
              </div>
            </div>
            <div className="flex justify-between mt-6 gap-10 md:flex-row flex-col">
              <div className="bg-gray-200 md:w-1/3 rounded-lg p-6 flex items-center gap-3 bg-opacity-45">
                <MdOutlineExplore />
                <p>Explore Opportunities</p>
              </div>
              <div className="bg-gray-200 md:w-1/3 rounded-lg p-6 flex items-center gap-3 bg-opacity-45">
                <MdOutlineExplore />
                <p>Explore Opportunities</p>
              </div>
              <div className="bg-gray-200 md:w-1/3 rounded-lg p-6 flex items-center gap-3 bg-opacity-45">
                <MdOutlineExplore />
                <p>Explore Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyVantage;
