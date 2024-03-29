import React from "react";
import Listings from "./Listings";
import RelatedArticles from "./RelatedArticles";

const CrowdFunding = () => {
  return (
    <div className="mt-10 p-10 bg-[#212121]">
      <div className="w-[80%] mx-auto">
        <div className="text-center text-white">
          <h1 className="text-3xl">Related Articles</h1>
          <small>
            Browse through articles relating to real estate
            crowdfunding/investment
          </small>
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto">
          <RelatedArticles />
        </div>
      </div>
    </div>
  );
};

export default CrowdFunding;
