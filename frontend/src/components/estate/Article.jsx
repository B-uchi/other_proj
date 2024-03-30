import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Article = ({ article, id }) => {
  const navigate = useNavigate();
  const [bleh, setBleh] = useState(false);
  const { title, body, img } = article;
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
  const link = processString(title);
  const viewArticle = () => {
    navigate(`/articles/${link}`, { state: article }, () => {
      setBleh(true);
    });
  };
  return (
    <div
      onClick={viewArticle}
      className="bg-gray-200 cursor-pointer relative h-[450px] shadow-white shadow-sm rounded-lg"
    >
      <div
        className="h-[50%] w-[350px] bg-cover rounded-t-lg bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="p-3">
        <h1 className="font-bold text-xl text-[#2f2f2f] ">{title}</h1>
        <p className="line-clamp-3 mt-4 text-[#2f2f2f] text-sm">{body}</p>
      </div>
      <button className="absolute bottom-0 w-full p-2 font-bold border-t-[1px] border-t-[#9e9e9e]">
        Read More
      </button>
    </div>
  );
};

export default Article;
