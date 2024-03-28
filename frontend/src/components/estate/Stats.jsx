import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { TfiPanel } from "react-icons/tfi";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { useEffect, useRef } from "react";

const Stats = () => {
  const registered = useRef(null);
  const raised = useRef(null);
  const returned = useRef(null);
  const listings = useRef(null);

  useEffect(() => {
    initCountUp();
  }, []);

  async function initCountUp() {
    const countUpModule = await import("countup.js");
    let countUpAnim = new countUpModule.CountUp(registered.current, 87, {
      enableScrollSpy: true,
    });
    let raisedAnim = new countUpModule.CountUp(raised.current, 350, {
      enableScrollSpy: true,
    });
    let returnedAnim = new countUpModule.CountUp(returned.current, 152, {
      enableScrollSpy: true,
    });
    let listingAnim = new countUpModule.CountUp(listings.current, 1, {
      enableScrollSpy: true,
    });
  }

  return (
    <div className="mt-10 p-10 bg-[#212121] text-gray-200">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="font-lato text-2xl font-bold text-center">
          Let the stats speak for themselves
        </h1>
        <div className="flex mt-7 md:flex-row flex-col">
          <div className="flex flex-col text-center md:border-r-[2px] border-white p-3 px-10">
            <div className="flex justify-center">
              <h1 className="text-4xl font font-montserrat flex">
                <p
                  className="text-4xl font font-montserrat"
                  ref={registered}
                ></p>
                .3k+
              </h1>
            </div>
            <small>Registered</small>
          </div>
          <div className="flex flex-col text-center md:border-r-[2px] border-white p-3 px-10">
            <div className="flex justify-center">
              <h1 className="text-4xl font font-montserrat flex">
                $<p className="text-4xl font font-montserrat" ref={raised}></p>
                M+
              </h1>
            </div>
            <small>Raised</small>
          </div>
          <div className="flex flex-col text-center md:border-r-[2px] border-white p-3 px-10">
            <div className="flex justify-center">
              <h1 className="text-4xl font font-montserrat flex">
                $
                <p className="text-4xl font font-montserrat" ref={returned}></p>
                .9M+
              </h1>
            </div>
            <small>Returned</small>
          </div>
          <div className="flex flex-col text-center p-3 px-10">
            <div className="flex justify-center">
              <h1 className="text-4xl font font-montserrat flex">
                <p className="text-4xl font font-montserrat" ref={listings}></p>
                .9k+
              </h1>
            </div>
            <small>Properties Listed</small>
          </div>
        </div>
      </div>
      <div className="container mt-10 lg:w-[80%] mx-auto flex lg:flex-row flex-col gap-10">
        <div className="lg:w-1/3 bg-[#2f2f2f] p-6 rounded-lg">
          <div className="flex flex-col items-center">
            <FaHouseCircleCheck size={30} className="text-white" />
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
        <div className="lg:w-1/3 bg-[#2f2f2f] p-6 rounded-lg">
          <div className="flex flex-col items-center">
            {" "}
            <GiReceiveMoney size={30} className="text-white" />
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
        <div className="lg:w-1/3 bg-[#2f2f2f] p-6 rounded-lg">
          <div className="flex flex-col items-center">
            <TfiPanel size={30} className="text-white" />
            <h1 className="font-montserrat mt-3 font-extrabold mb-4 text-xl">
              Diversification and Control
            </h1>
          </div>
          <p className="text-center">
            Real estate diversifies portfolios, allowing investors to spread
            risk across properties, sectors, and locations. Unlike other
            investments, it offers direct control over management, renovations,
            and rental strategies, enhancing overall portfolio management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
