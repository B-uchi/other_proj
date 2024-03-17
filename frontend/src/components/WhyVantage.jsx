import React from "react";
import why from "../assets/why.jpg";
import { TbWorldSearch } from "react-icons/tb";
import { CiLock } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

const WhyVantage = () => {
  const testimonials = [
    {
      name: "Sarah Smith",
      message:
        "Vantage has been instrumental in guiding me through my real estate investment journey. Their expert team provided personalized advice, helping me secure lucrative properties. I'm thrilled with the returns I've seen and highly recommend their services to anyone looking to invest wisely.",
    },
    {
      name: "John Anderson",
      message:
        "Impressed by Vantage's professionalism and efficiency! They made the investment process seamless, from property selection to closing. The team's expertise and dedication ensured I made informed decisions, resulting in excellent returns. I'm grateful for their support and look forward to future collaborations.",
    },
    {
      name: "Emily Rodriguez",
      message:
        "Vantage exceeded my expectations with their top-notch service and unparalleled expertise. Their team went above and beyond to understand my investment goals and tailored solutions to meet them. Thanks to Vantage, I've achieved financial milestones beyond what I thought possible. Highly recommend!",
    },
    {
      name: "Michael Thompson",
      message:
        "Choosing Vantage for my real estate investments was the best decision I made. Their comprehensive market analysis and strategic insights helped me identify high-potential properties. With their support, I've built a robust portfolio and enjoyed consistent returns. Trustworthy, reliable, and highly recommended!",
    },
  ];

  return (
    <div
      className="h- mt-10 w-full bg-center bg-fixed"
      style={{ backgroundImage: `url(${why})` }}
    >
      <div className="p-5 container mx-auto flex items-center flex-col">
        <div className="bg-gray-200 p-3 rounded-lg">
          <h1 className="text-xl font-montserrat">
            Investing with us is a breeze
          </h1>
        </div>

        <div className="w-[80%] mt-6 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">{testimonial.message}</p>
                <p className="text-gray-600 font-semibold">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-gray-200 p-3 w-fit rounded-lg">
            <h1 className="text-xl font-montserrat">
              We offer simple yet sophisticated services
            </h1>
          </div>
          <div className="mt-5 w-full">
            <div className="flex justify-between gap-10 lg:flex-row flex-col">
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3">
                <MdOutlineExplore size={30} />
                <p>Explore Opportunities</p>
              </div>
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3">
                <TbWorldSearch size={30} />
                <p>Research and Analyze</p>
              </div>
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3">
                <MdOutlineSupportAgent size={30} />
                <p>Connect with Experts</p>
              </div>
            </div>
            <div className="flex justify-between mt-6 gap-10 lg:flex-row flex-col">
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3">
                <CiLock size={30} />
                <p>Secure Your Investment</p>
              </div>
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3">
                <FaChalkboardTeacher size={30} />
                <p>Track Your Portfolio</p>
              </div>
              <div className="bg-gray-100 lg:w-1/3 rounded-lg p-6 flex items-center gap-3">
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
