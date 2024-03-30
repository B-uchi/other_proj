import React from "react";
import RelatedArticles from "../../components/estate/RelatedArticles";
import Footer from "../../components/estate/Footer";

const HowItWorks = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto mt-10 mb-10">
        <div className="text-center">
          <h1 className="text-[#2f2f2f] font-bold font-montserrat text-3xl ">
            How Real Estate Crowdfunding Works
          </h1>
          <small>
            Explore articles that delve deep into the concepts of crowdfunding
          </small>
        </div>
        <RelatedArticles />
        <div className="text-center mt-10">
          <h1 className="text-[#2f2f2f] font-bold font-montserrat text-3xl ">
            Vantage Makes Investments Easier
          </h1>
          <small>
            We utilize the following simple steps to make our client make hassle free investments
          </small>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
