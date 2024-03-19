import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { TfiPanel } from "react-icons/tfi";
import { FaHouseCircleCheck } from "react-icons/fa6";

const Why = () => {
  return (
    <div className="p-2 mt-5">
      <div className="container mt-3 lg:w-[80%] mx-auto flex lg:flex-row flex-col gap-10">
        <div className="lg:w-1/3 bg-[#efefef] p-6 rounded-lg">
          <div className="flex flex-col items-center">
            <FaHouseCircleCheck size={30} className="text-purple-700" />
            <h1 className="font-montserrat mt-3 font-extrabold mb-4 text-xl">
              Tangible Asset Stability
            </h1>
          </div>
          <p className="text-center">
            Real estate's tangible nature ensures stability. Properties possess
            intrinsic value, typically appreciating over time, acting as a hedge
            against inflation and market volatility, offering investors a secure
            and tangible asset foundation for their investment portfolio.
          </p>
        </div>
        <div className="lg:w-1/3 bg-[#efefef] p-6 rounded-lg">
          <div className="flex flex-col items-center">
            {" "}
            <GiReceiveMoney size={30} className="text-purple-700" />
            <h1 className="font-montserrat mt-3 font-extrabold mb-4 text-xl">
              Passive Income Generation
            </h1>
          </div>
          <p className="text-center">
            Rental properties provide consistent passive income streams. Through
            rental payments, investors can secure steady cash flow, creating a
            reliable source of income while simultaneously benefiting from
            potential property value appreciation.
          </p>
        </div>
        <div className="lg:w-1/3 bg-[#efefef] p-6 rounded-lg">
          <div className="flex flex-col items-center">
            <TfiPanel size={30} className="text-purple-700"/>
            <h1 className="font-montserrat mt-3 font-extrabold mb-4 text-xl">
              Diversification and Control
            </h1>
          </div>
          <p className="text-center">
            Real estate facilitates portfolio diversification. Investors can
            spread risk by allocating funds across various properties, sectors,
            and locations. Additionally, unlike other investments, real estate
            grants investors direct control over management, renovations, and
            rental strategies, enhancing overall portfolio management
            capabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
