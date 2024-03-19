import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
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

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="p-5 mt-5 mb-5">
      <div className="container mx-auto flex items-center flex-col">
        <h1 className="font-montserrat font-bold text-2xl text-center">
          Hear what they say about us
        </h1>
        <div className="justify-center flex gap-5 mt-6 items-end w-full md:w-[75%]">
          <div className="border-[1px] shadow-xl hidden md:block  p-3 rounded-lg w-[500px] md:h-[220px] relative bg-white border-purple-200">
            <p className="font-siliguri text-center">
              {testimonials[index].message}
            </p>
            <h1 className="absolute bottom-5 left-[50%] -translate-x-[50%]">
              {testimonials && testimonials[index].name}
            </h1>
          </div>
          <div className="border-[1px] shadow-xl  p-3 rounded-lg w-[100%] md:w-[500px] md:h-[250px] relative bg-white border-purple-200">
            <p className="font-siliguri font-normal text-center">
              {testimonials[(index + 1) % testimonials.length].message}
            </p>
            <h1 className="md:absolute bottom-5 left-[50%] text-center mt-3 md:-translate-x-[50%]">
              {testimonials &&
                testimonials[(index + 1) % testimonials.length].name}
            </h1>
          </div>
          <div className="border-[1px] shadow-xl  hidden md:block p-3 rounded-lg w-[500px] md:h-[220px] relative bg-white border-purple-200">
            <p className="font-siliguri font-normal text-center">
              {testimonials[(index + 2) % testimonials.length].message}
            </p>
            <h1 className="absolute bottom-3 left-[50%] -translate-x-[50%]">
              {testimonials &&
                testimonials[(index + 2) % testimonials.length].name}
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-5 gap-7">
          <button
            onClick={prevSlide}
            className="bg-blue-400 text-white rounded-md p-4 px-4"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-blue-400 text-white rounded-md p-4 px-4"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
