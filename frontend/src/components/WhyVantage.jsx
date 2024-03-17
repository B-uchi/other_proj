import React from "react";
import why from "../assets/why.jpg";

const WhyVantage = () => {
  return (
    <div
      className="h-[50vh] mt-10 w-full bg-center bg-fixed"
      style={{ backgroundImage: `url(${why})` }}
    >
      <div className="p-5 container mx-auto flex items-center flex-col">
        <div className="bg-gray-200 p-3 rounded-lg">
          <h1 className="text-xl font-montserrat font-extrabold">Why Vantage?</h1>
        </div>
      </div>
    </div>
  );
};

export default WhyVantage;
