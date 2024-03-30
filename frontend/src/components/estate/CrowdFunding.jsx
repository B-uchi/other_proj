import React from "react";
import Listings from "./Listings";
import RelatedArticles from "./RelatedArticles";

const CrowdFunding = () => {
  return (
    <div className="mt-10 p-4 md:p-10 bg-[#212121]">
      <div className="md:w-[80%] mx-auto">
        <div className="text-center p-4 text-white">
          <a href="/how-it-works" className="underline">
            <h1 className="text-3xl">Related Articles</h1>
          </a>
          <small>
            Browse through articles relating to real estate
            crowdfunding/investment
          </small>
        </div>
        <div className="md:w-[80%] mx-auto">
          <RelatedArticles />
        </div>
      </div>
    </div>
  );
};

export default CrowdFunding;
