"use client";
import soslogo from "@/public/soslogo.svg";
import Image from "next/image";
import NavLink from "./components/NavLink";
import menuIcon from "@/app/assets/icons/menu.svg";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full flex justify-center   shadow-[0px_8px_8px_0px_#12121233] h-16 md:h-[72px]  text-[#1158A7] text-sm font-normal z-20">
      <div className="  c_container flex justify-between items-center gap-6">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden"
        >
          <Image src={menuIcon} alt="menuIcon" />
        </button>
        <Image
          src={soslogo}
          alt="soslogo"
          className="w-[131px] h-[26px] md:w-[198px] md:h-10"
        />
        <div
          style={{ insetInlineStart: menuOpen ? "0" : "-100%" }}
          className=" flex flex-col md:flex-row justify-evenly items-center grow   absolute md:static gap-4 top-16 bg-slate-50 md:bg-transparent p-4 transition-all duration-300 ease-in-out  "
        >
          <NavLink url="/" text="صفحه اصلی" />
          <NavLink url="/todo-list" text="todo list" />
          <NavLink url="/centers" text="مراکز خدمات درمانی" />
          <NavLink url="/our-branches" text="شعبه‌های ما" />
          <NavLink url="/questions" text=" سوال‌‌های متداول" />
        </div>

        <button className="bg-[#1158A7] text-white rounded-lg  md:text-base md:font-semibold w-[125px] h-10 md:w-[171px] md:h-[56px]">
          ورود و فعالسازی
        </button>
      </div>
    </header>
  );
};

export default Header;
