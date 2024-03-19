import React from "react";

const Question = () => {
  return (
    <div className="p-5 bg-[#EEEFEB] dotOverlay">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center">
          <h1 className="font-bold font-montserrat text-2xl">
            Have a question?
          </h1>
          <small>
            Our support staff would be happy to answer your questions
          </small>
        </div>
        <div className="w-[90%] md:w-[50%] mt-5 p-5">
          <form className="flex flex-col gap-3" action="" method="post">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-md border-2 border-gray-200"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-md border-2 border-gray-200"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-md border-2 border-gray-200"
            />
            <textarea
              placeholder="Message"
              className="p-3 rounded-md border-2 border-gray-200"
              rows={5}
            ></textarea>
            <button className="mt-5 p-3 rounded-lg bg-gradient-to-r from-slate-300 to-blue-400 hover:from-blue-400 hover:to-purple-300 transition-all font-bold text-lg mx-auto md:w-1/2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Question;