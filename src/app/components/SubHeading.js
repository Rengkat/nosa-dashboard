import React from "react";
import Link from "next/link";
const SubHeading = ({ text, buttonText, isButton, isLink, link }) => {
  return (
    <div className="w-full flex justify-between items-center bg-gray-200 p-2 md:p-5 shadow text-base md:text-xl text-gray-600 font-bold rounded">
      <span>{text}</span>
      {isLink && (
        <Link href={link} className="bg-primary-500 text-white py-3 px-6 shadow rounded">
          {buttonText}
        </Link>
      )}
      {isButton && (
        <button className="bg-primary-500 text-white py-3 px-6 shadow rounded">{buttonText}</button>
      )}
    </div>
  );
};

export default SubHeading;
