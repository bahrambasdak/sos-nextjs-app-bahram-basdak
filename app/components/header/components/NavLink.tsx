"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ text = "", url = "" }) => {
  const pathName = usePathname();

  return (
    <Link
      href={url}
      style={pathName === url ? { color: "red" } : { color: "inherit" }}
    >
      {text}
    </Link>
  );
};
export default NavLink;
