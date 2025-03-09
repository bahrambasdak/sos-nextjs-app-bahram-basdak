import Image from "next/image";
import { ArticleType } from "@/app/types/types";
import Link from "next/link";
import clockIcon from "@/app/assets/icons/clock.svg";
import { toPersianDigits } from "@/app/utilities";

const Article = ({ article = {} as ArticleType }) => (
  <div className="flex flex-col min-w-[300px] max-w-[400px] gap-2 p-4 rounded-2xl shadow-[0px_2px_4px_0px_#12121233] text-sm font-normal bg-white border border-[#0F5098] text-[#767676] ">
    <div className="relative w-full h-[158px] rounded-2xl overflow-hidden">
      <Image
        src={article.image}
        alt={article.title}
        fill
        className="w-full   z-0"
      />
    </div>

    <h3 className="text-base font-semibold text-[#121212]">{article.title}</h3>
    <time className="flex items-center gap-2">
      <Image src={clockIcon} alt="clockIcon" />
      {toPersianDigits(article.period)}
    </time>
    <p>{article.summary}</p>
    <div className="flex justify-end">
      <Link
        href={`/articles/${article.id}`}
        className="w-[125px] h-10 flex justify-center items-center bg-white rounded-lg text-[#1158A7] border border-[#1158A7] shadow-[0px_2px_4px_0px_#12121233] hover:bg-[#1158A7] hover:text-white transition"
      >
        ادامه
      </Link>
    </div>
  </div>
);

export default Article;
