import React from "react";
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
    <div className="mt-10 p-5 ">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="font-lato text-2xl font-bold text-center">
          Let the stats speak for themselves
        </h1>
        <div className="flex mt-7 md:flex-row flex-col">
          <div className="flex flex-col text-center md:border-r-[2px] border-black p-3 px-10">
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
          <div className="flex flex-col text-center md:border-r-[2px] border-black p-3 px-10">
            <div className="flex justify-center">
              <h1 className="text-4xl font font-montserrat flex">
                $<p className="text-4xl font font-montserrat" ref={raised}></p>
                M+
              </h1>
            </div>
            <small>Raised</small>
          </div>
          <div className="flex flex-col text-center md:border-r-[2px] border-black p-3 px-10">
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
    </div>
  );
};

export default Stats;
