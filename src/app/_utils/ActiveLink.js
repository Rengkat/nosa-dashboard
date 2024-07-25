"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export const ActiveLink = ({ href, name, icon }) => {
  const route = usePathname();
  const isActive = href === `${route}`;
  return (
    <Link
      className={` ${
        isActive ? "bg-primary-500 text-white" : "text-gray-600"
      } flex items-center gap-5 text-[1.2rem] capitalize font-bold mx-[1rem] pl-[2rem] py-3 border-[1px] shadow rounded-md my-1`}
      href={href}>
      <span>{icon}</span>
      <span>{name}</span>
    </Link>
  );
};
