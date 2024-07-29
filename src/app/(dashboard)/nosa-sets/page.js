import { dates } from "@/app/_utils/page";
import SubHeading from "@/app/components/SubHeading";
import React from "react";

const Sets = () => {
  return (
    <div>
      <div className="flex items-center my-5">
        <select className="bg-primary-500 text-white appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded">
          <option value="" disabled selected>
            Select a NOSA Set
          </option>
          {dates.map((date) => (
            <option key={date.value} value={date.value}>
              {date.nosaSet}
            </option>
          ))}
        </select>
      </div>
      <div className="absolute bg-[#00000061] backdrop-blur-sm rounded-md inset-0 h-[80vh] grid place-items-center">
        <div className="bg-white size-[50%] text-xl text-center flex flex-col justify-center">
          <p> Sorry, You are not authorized to access this NOSA Set.</p>
          <p> You are only allowed to access your set page!</p>
          <div className="mt-5">
            <button className="bg-primary-500 text-white cursor-pointer py-3 px-6 rounded">
              Select Different Set
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sets;
