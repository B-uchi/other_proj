import React from "react";
import hero from "../assets/hero.png";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="">
      <div className="w-full flex flex-col-reverse md:flex-row md:h-[70vh]">
        <div className="bg-[#F9FBFC] md:w-[50%] p-10 flex flex-col justify-center">
          <div className="text-center md:text-left ">
            <h1 className="text-3xl font-lato z-30 md:w-[80%]">
              Investing in Real Estate has never been easier
            </h1>
            <p className="mt-6">
              With our user-friendly platform and expert support, investing in
              real estate has never been more accessible. Start building your
              wealth today with ease and confidence.
            </p>
          </div>
          <div className="mt-5 flex flex-col">
            <div className="">
              <p className="text-center md:text-left">Get started in 3 easy steps:</p>
              <div className=" w-full mt-5 flex justify-evenly">
                <div className="flex flex-col items-center p-4 bg-gray-200 rounded-md justify-center">
                  <MdOutlinePersonAddAlt size={20}/>
                  <small>1. Register</small>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-200 rounded-md justify-center">
                  <FaHouseCircleCheck size={20}/>
                  <small>2. Choose</small>
                  <small>Property</small>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-200 rounded-md justify-center">
                  <FaDollarSign size={20}/>
                  <small>3. Deposit</small>
                </div>
              </div>
            </div>
            <button className="mx-auto w-1/2 mt-5 p-3 rounded-lg bg-gradient-to-r from-slate-300 to-blue-400 hover:from-blue-400 hover:to-purple-300 transition-all">
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-[#EEEFEB] md:w-[50%] rounded-lg p-3 flex justify-center items-center">
          <img src={hero} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
