"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const Toggle = () => {
  const { isSideBarOpen } = useSelector((state) => state.app);

  return (
    <div
      className={`${
        isSideBarOpen ? "-left-full" : "left-0"
      } w-[20rem] bg-gray-200 fixed bottom-0 top-[6rem] z-20 duration-500 transition-all`}>
      <Sidebar />
    </div>
  );
};

export default Toggle;
