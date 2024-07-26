import React from "react";

const SubHeading = ({ text, buttonText, isButton }) => {
  return (
    <div className="w-full flex justify-between items-center bg-gray-200 p-5 shadow text-xl text-gray-600 font-bold rounded">
      <span>{text}</span>
      {isButton && (
        <button className="bg-primary-500 text-white py-3 px-6 shadow rounded">{buttonText}</button>
      )}
    </div>
  );
};

export default SubHeading;
