import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Article = ({ article, id }) => {
  const navigate = useNavigate()
  const [bleh, setBleh] = useState(false);
  const { title, body, img } = article;
  const viewArticle = () => {
    navigate(`/articles/${id}`, { state: article }, () => {
      setBleh(true);
    });
  };
  return (
    <div onClick={viewArticle} className="bg-gray-200 cursor-pointer relative h-[500px] shadow-white shadow-sm rounded-lg">
      <div
        className="h-[50%] w-[350px] bg-cover rounded-t-lg bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="p-3">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="line-clamp-3 mt-3 text-[#2f2f2f]">{body}</p>
      </div>
      <button className="absolute bottom-0 w-full p-4 font-bold border-t-[1px] border-t-[#2f2f2f]">
        Read More
      </button>
    </div>
  );
};

export default Article;
