import React from "react";
import { articleList } from "../util/articles";
import { useNavigate } from "react-router-dom";

const ArticleSuggestions = () => {
  const navigate = useNavigate();
  function processString(text) {
    // Replace all whitespace with underscores:
    const noWhitespace = text.replace(/\s/g, "_");

    // Remove a trailing question mark, if present:
    if (noWhitespace.endsWith("?")) {
      return noWhitespace.slice(0, -1).toLowerCase();
    } else {
      return noWhitespace.toLowerCase();
    }
  }
  const viewArticle = (article) => {
    const link = processString(article.title);
    navigate(`/articles/${link}`, { state: article });
  };
  return (
    <div className="md:w-[30%] w-[95%] mx-auto p-3 rounded-md border-[1px] border[#efefef] bg-white">
      <h1 className="font-bold font-montserrat text-[#2f2f2f]">
        Other Related Links:
      </h1>
      <ul className="flex flex-col gap-4 ">
        {articleList.map((article) => (
            <li key={article.title} className="list-inside  underline text-[#2f2f2f] hover:text-[#696969]">
              <p className="list-disc list-item" onClick={() => viewArticle(article)}>{article.title}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleSuggestions;
