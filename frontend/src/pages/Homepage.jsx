import React from "react";
import Navbar from "../components/Navbar";
import landingMain from "../assets/landingmain.jpg";

const Homepage = () => {
  return (
    <div
      className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat bg-fixed justify-center flex"
      style={{ backgroundImage: `url(${landingMain})` }}
    >
      <div className="absolute top-0">
        <Navbar />
      </div>
      <div className="dotOverlay absolute"></div>
      <div className=" p-4 rounded-lg z-30">
        <h1 className="font-montserrat mt-24 text-white md:text-left text-center font-bold text-5xl md:text-6xl">
          VANTAGE INVESTMENTS
        </h1>
        <p className="text-center md:text-right text-gray-700">Real Estate investments redefined...</p>
      </div>
    </div>
  );
};

export default Homepage;
