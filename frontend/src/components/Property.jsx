import React from "react";

const Property = ({ property }) => {
  const { img, street, location, roi, target } = property;
  return (
    <div className="shadow-lg bg-gray-100 rounded-lg ">
      <div className="w-[300px] ">
        <img src={img} className="w-full rounded-t-lg" alt="" />
      </div>
      <div className="p-3 text-center">
        <h1 className="mt-3 text-purple-700">{street}</h1>
        <small className="uppercase">{location}</small>
        <div className="p-3">
          <h1 className="text-2xl font-montserrat font-bold text-purple-900">{roi}%</h1>
          <small>Estimated return per annum</small>
        </div>
        <div className="text-left">
          <small>Target amount</small>
          <div className="border-[1px] mb-2 h-[8px] rounded-sm border-slate-400"></div>
          <div className="w-full flex justify-between text-sm">
            <p>$0</p>
            <p>${target}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
