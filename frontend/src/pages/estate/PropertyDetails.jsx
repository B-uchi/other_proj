import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/estate/Footer";
import Question from "../../components/estate/Question";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Listings from "../../components/estate/Listings";

const PropertyDetails = () => {
  const locationn = useLocation();
  const data = locationn.state;
  const {
    img,
    street,
    location,
    roi,
    target,
    investmentType,
    investmentTerm,
    totalRaised,
    propertyType,
  } = data;

  document.title = `${street} - Property`;

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-[80%] text-center mt-10">
          <h1 className="text-3xl font-bold font-montserrat">{street}</h1>
          <small className="uppercase">{location}</small>
        </div>
        <div className="md:w-[80%] flex shadow-lg bg-white border-[1px] border-[£efefef] mt-5 rounded-lg md:flex-row flex-col">
          <div className="md:w-1/2 relative flex justify-center items-center">
            <img
              src={img}
              className="rounded-l-lg w-[400px]"
              alt="property image"
            />
            <button className="bg-[#212121] absolute left-3 top-[50%] text-white rounded-full bg-opacity-40 p-4 px-4">
              <FaChevronLeft />
            </button>
            <button className="bg-[#212121] absolute right-3 top-[50%] text-white rounded-full bg-opacity-40 p-4 px-4">
              <FaChevronRight />
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="p-3 px-4 flex flex-col">
              <h1 className="text-2xl font-bold">{investmentType}</h1>
              <div className="flex justify-between items-center mt-5">
                <div>
                  <p>Return Per Annum</p>
                  <h1 className="text-xl font-bold">{roi}%</h1>
                </div>
                <div>
                  <p>Return Per Annum</p>
                  <h1 className="text-xl text-right font-bold">{roi}%</h1>
                </div>
              </div>
              <div className="flex justify-between items-center mt-10">
                <div>
                  <p>Investment Term</p>
                  <h1 className="text-xl font-bold">{investmentTerm}</h1>
                </div>
                <div>
                  <p>Property Type</p>
                  <h1 className="text-xl text-right font-bold">
                    {propertyType}
                  </h1>
                </div>
              </div>
              <div className="text-left mt-7">
                <div className="border-[1px] mb-2 h-[20px] rounded-sm border-slate-400 overflow-hidden">
                  <div className="w-[40%] bg-slate-400">.</div>
                </div>
                <div className="w-full flex justify-between text-sm">
                  <p>${totalRaised}</p>
                  <p>${target}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[95%] md:w-[80%] mb-10 mt-3 flex justify-between">
          <div className="p-3 w-[60%]">
            <h1 className="text-xl font-bold font-montserrat">
              Property Details
            </h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              doloremque, quas, quidem, voluptate voluptatum dolores
              exercitationem iusto autem ipsa nemo quae quibusdam. Quisquam
              voluptates, doloribus, quae, quod, voluptate quos quas
              exercitationem iusto autem ipsa nemo quae quibusdam. Quisquam
              voluptates, doloribus, quae, quod, voluptate quos quas
            </p>
          </div>
          <div className="w-[30%] p-3 text-right">
            <h1 className="text-xl font-bold font-montserrat">
              Investment Advantages
            </h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              doloremque, quas, quidem.
            </p>
          </div>
        </div>
        <div className="w-[95%] md:w-[80%] p-3">
          <div className="text-center">
            <h1 className="text-2xl font-bold font-montserrat">
              Open Investment Opportunities
            </h1>
            <small>A whole new world of financial returns await you</small>
          </div>
          <Listings />
        </div>
      </div>
      <Question />
      <Footer />
    </div>
  );
};

export default PropertyDetails;
