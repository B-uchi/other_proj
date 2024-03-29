import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/estate/Footer";

const RelatedArticles = () => {
  const locationn = useLocation();
  const data = locationn.state;
  const { img, title, body } = data;

  document.title = `Related Article - Vantage Investments`;
  return (
    <div>
      <div className="w-[80%] mx-auto mt-5 mb-5">
        <div
          className="h-[50vh] w-full bg-cover bg-center bg-no-repeat rounded-md"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <h1 className="mt-6 text-3xl font-montserrat font-bold">{title}</h1>
        <div className="">
          <div className="w-[70%]">
            <p className="mt-5 text-[#2f2f2f]">{body}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RelatedArticles;
