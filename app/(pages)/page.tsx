"use client";
import { useEffect, useState } from "react";
import { ArticleType } from "@/app/types/types";
import Article from "@/app/components/article";
import { getArticles } from "../apis";

export default function Home() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="pageContainer mx-auto mt-6 ">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-medium text-[#121212]">مقاله ها</h1>
        <button className="text-[#1158A7] text-base font-semibold">
          نمایش همه
        </button>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-4  mt-5">
        {loading ? (
          <div>در حال بارگذاری...</div>
        ) : (
          articles.map((article) => (
            <Article key={article.id} article={article} />
          ))
        )}
      </div>
    </main>
  );
}
