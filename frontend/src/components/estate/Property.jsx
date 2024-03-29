import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner'

const Property = ({ property, id }) => {
  const navigate = useNavigate()
  const { img, street, location, roi, target } = property;

  const viewProperty = () =>{
    navigate(`/properties/${id}`, { state: property });
  }

  return (
    <div className="shadow-lg bg-gray-100 rounded-lg cursor-pointer">
      <div className="md:w-[300px]">
        <img src={img} className="w-full rounded-t-lg" alt="" />
      </div>
      <div className="p-3 text-center">
        <h1 className="mt-3">{street}</h1>
        <small className="uppercase">{location}</small>
        <div className="p-3">
          <h1 className="text-2xl font-montserrat font-bold">{roi}%</h1>
          <small>Estimated return per annum</small>
        </div>
        <div className="text-left">
          <small>Target amount</small>
          <div className="border-[1px] mb-2 h-[10px] rounded-sm border-slate-400"></div>
          <div className="w-full flex justify-between text-sm">
            <p>$0</p>
            <p>${target}</p>
          </div>
        </div>
      </div>
        <button onClick={viewProperty} className="text-black border-[1px] border-t-gray-300 font-inter p-3 w-full mt-5">View Property</button>
    </div>
  );
};

export default Property;
