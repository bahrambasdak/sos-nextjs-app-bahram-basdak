"use client";
import Article from "@/app/components/article";
import { ArticleType } from "@/app/types/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<ArticleType>({} as ArticleType);
  useEffect(() => {
    fetch(`http://localhost:4000/articles/${articleId}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [articleId]);

  return (
    <div className="pageContainer flex flex-col justify-center items-center mx-auto mt-6 ">
      <h1 className="text-2xl font-medium text-[#121212]">مقاله</h1>
      {article.id && <Article article={article} />}
    </div>
  );
};

export default ArticlePage;
