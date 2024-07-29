import { dates } from "@/app/_utils/page";
import SubHeading from "@/app/components/SubHeading";
import React from "react";

const Sets = () => {
  return (
    <div className="relative">
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
      <div className="absolute bg-[#0000005f] inset-0 h-[80vh]"></div>
    </div>
  );
};

export default Sets;
