"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export const ActiveLink = ({ href, name }) => {
  const route = usePathname();
  const isActive = href === `${route}`;
  return (
    <Link
      className={` ${
        isActive ? "bg-primary-500 text-white" : "text-gray-600 bg-slate-100"
      } py-3 px-5 rounded shadow border-0`}
      href={href}>
      <span>{name}</span>
    </Link>
  );
};
