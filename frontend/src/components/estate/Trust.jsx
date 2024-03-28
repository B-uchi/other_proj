import React from "react";
import bbc from "../../assets/trust/BBC.png";
import forbes from "../../assets/trust/Forbes.png";
import infobae from "../../assets/trust/Infobae.png";
import trust1 from "../../assets/trust/trust1.svg";
import trust2 from "../../assets/trust/trust2.svg";
import trust3 from "../../assets/trust/trust3.svg";
import trust4 from "../../assets/trust/trust4.svg";
import trust5 from "../../assets/trust/trust5.svg";

const Trust = () => {
  return (
    <div className="p-5 flex flex-col w-full">
      <h1 className="text-lg font-montserrat text-center">As seen on:</h1>
      <div className="flex flex-col items-center opacity-50">
        <div className="flex justify-between gap-20 items-center">
          <div className="w-1/4">
            <img src={bbc} className="w-[120px]" alt="" />
          </div>
          <div className="w-1/4">
            <img src={trust2} className="w-[120px]" alt="" />
          </div>
          <div className="w-1/4">
            <img src={trust1} className="w-[120px]" alt="" />
          </div>
          <div className="w-1/4">
            <img src={infobae} className="w-[120px]" alt="" />
          </div>
        </div>
        <div className="flex justify-between gap-20 items-center">
          <div className="w-1/4">
            <img src={trust3} className="w-[120px]" alt="" />
          </div>
          <div className="w-1/4">
            <img src={trust5} className="w-[120px]" alt="" />
          </div>
          <div className="w-1/4">
            <img src={forbes} className="w-[120px]" alt="" />
          </div>
          <div className="w-1/4">
            <img src={trust4} className="w-[120px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
