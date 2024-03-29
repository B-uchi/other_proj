import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/estate/Footer";
import Question from "../../components/estate/Question";
import ArticleSuggestions from "../../components/estate/ArticleSuggestions";

const RelatedArticles = () => {
  const locationn = useLocation();
  const data = locationn.state;
  const { img, title, body } = data;

  document.title = `Related Article - Vantage Investments`;
  return (
    <div>
      <div className="md:w-[80%] mx-auto md:mt-5 mb-5">
        <div
          className="h-[50vh] w-full bg-cover bg-center bg-no-repeat md:rounded-md"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="mt-5 flex md:flex-row flex-col justify-between">
          <div className="md:w-[70%] p-4">
            <h1 className="mt-6 text-xl md:text-3xl text-center md:text-left font-montserrat text-[#2f2f2f] font-bold">{title}</h1>
            <p className="mt-5 text-[#8d8d91]">{body}</p>
          </div>
          <ArticleSuggestions/>
        </div>
      </div>
      <Question/>
      <Footer />
    </div>
  );
};

export default RelatedArticles;
