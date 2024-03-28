import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Risk = () => {
  const [showRisk, setShowRisk] = useState(true);
  const hideRisk = () => {
    setShowRisk(false);
  };

  return (
    <div className="">
      {showRisk ? (
        <div className="bg-white border-[1px] opacity-85 border-t-[#696969] shadow-lg w-full p-2 flex items-center">
          <div className="text-sm text-center flex-grow">
            <p className="m-0">
              Before proceeding with your investment, it's important to
              acknowledge the inherent risks involved, which include potential
              loss of capital and illiquidity.
            </p>
          </div>
          <button onClick={hideRisk} className="-ml-2 focus:outline-none">
            <IoMdClose color="red" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Risk;
