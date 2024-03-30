import React from "react";
import Article from "./Article";
import { articleList } from "../util/articles";

const RelatedArticles = () => {
  console.log(articleList);

  return (
    <div className="mt-3">
      <div className="container mx-auto">
        <div className="flex gap-6 p-3 overflow-x-scroll">
          {articleList.map((article, index) => (
              <Article article={article} key={index} id={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RelatedArticles;
