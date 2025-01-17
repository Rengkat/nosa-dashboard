"use client";
import React from "react";
import { IoMenu } from "react-icons/io5";
import { toggleSideBar } from "../../../Redux/services/AppSlice";
import { useDispatch } from "react-redux";

const ToggleMenu = () => {
  const dispatch = useDispatch();
  return (
    <div
      // lg:hidden
      onClick={() => dispatch(toggleSideBar())}
      className="block border-2 border-gray-300 text-primary-500">
      <IoMenu fontSize={40} />
    </div>
  );
};

export default ToggleMenu;
