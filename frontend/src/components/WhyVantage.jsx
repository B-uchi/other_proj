import React from "react";
import why from "../assets/why.jpg";
import { TbWorldSearch } from "react-icons/tb";
import { CiLock } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiCircleCheck } from "react-icons/ci";
import dashboard from "../assets/dashboard.svg";

const WhyVantage = () => {
  return (
    <div className="mt-10 w-full bg-center bg-fixed bg-opacity-90">
      <div className="p-5 bg-white rounded-lg shadow-md mx-auto flex flex-col md:flex-row w-[80%] items-center gap-5 justify-center">
        <div className="md:w-1/2 flex justify-left">
          <img src={dashboard} className="w-[500px]" alt="" />
        </div>
        <div className="md:w-1/2 p-2 md:p-5">
          <h1 className="font-bold font-montserrat text-2xl md:text-4xl text-blue-900">
            Investments designed just for you
          </h1>
          <div className="mt-3 w-full">
            <ul className="flex list-disc text-gray-700 justify-between gap-4 flex-col">
              <li className="flex items-center gap-3 ">
                <CiCircleCheck size={27} color="blue"/>
                <p>Explore Opportunities</p>
              </li>
              <div className="flex items-center gap-3 ">
                <CiCircleCheck size={27} color="blue"/>
                <p>Research and Analyze</p>
              </div>
              <div className="flex items-center gap-3 ">
                <CiCircleCheck size={27} color="blue"/>
                <p>Connect with Experts</p>
              </div>
              <div className="flex items-center gap-3 ">
                <CiCircleCheck size={27} color="blue"/>
                <p>Secure Your Investment</p>
              </div>
              <div className="flex items-center gap-3 ">
                <CiCircleCheck size={27} color="blue"/>
                <p>Track Your Portfolio</p>
              </div>
              <div className="flex items-center gap-3 ">
                <CiCircleCheck size={27} color="blue"/>
                <p>Portfolio Diversification</p>
              </div>
            </ul>
          </div>
          <button className="mx-auto w-1/2 mt-5 p-3 rounded-lg font-bold text-white bg-blue-400">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyVantage;
