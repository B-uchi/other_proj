import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/estate/Footer";
import Question from "../../components/estate/Question";

const PropertyDetails = () => {
  const locationn = useLocation();
  const data = locationn.state;
  const { img, street, location, roi, target } = data;

  return (
    <div className="w-full">
      <div className="w-1/2 h-[100vh] bg-white justify-center items-center flex border-r-[1px] border-[#efefef]">
        <img src={img} alt="property image" className="" />
      </div>
      <Question/>
      <Footer/>
    </div>
  );
};

export default PropertyDetails;
