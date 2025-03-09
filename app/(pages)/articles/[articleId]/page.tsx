"use client";
import { getArticle } from "@/app/apis";
import { ArticleType } from "@/app/types/types";
import { toPersianDigits } from "@/app/utilities";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";




const ArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState<ArticleType>({} as ArticleType);
  useEffect(() => {
    getArticle(articleId as string).then((data) => {
      setArticle(data);
    })
      .catch((err) => {
        console.log(err);
      });
  }, [articleId]);
  if(!article.id) return <div>در حال بارگذاری...</div>;
  return (
    <main className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200 mt-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
      <time className="text-gray-500 text-sm mb-2 block">{toPersianDigits(article.period)}</time>
      <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
        <Image
          src={article?.image}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">{article?.summary}</p>
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          بازگشت به مقالات
        </Link>
      </div>
    </main>
  );
};

export default ArticlePage;
