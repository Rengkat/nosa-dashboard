import { dates, employmentStatus } from "@/app/_utils/page";
import React from "react";

const BasicInfo = () => {
  // const res = await fetch("https://countriesnow.space/api/v0.1/countries");
  // const countries = await res.json();
  // console.log(countries?.data);
  return (
    <div>
      <div className="flex items-center flex-col md:flex-row gap-5 w-full mb-5">
        <input
          type="text"
          placeholder="Enter First Name"
          className="appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-full"
        />
        <input
          type="text"
          placeholder="Enter Surname"
          className="appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-full"
        />
      </div>
      {/* ============================= */}
      <div className="flex items-center flex-col md:flex-row gap-5 w-full mb-5">
        <input
          placeholder="Email"
          type="email"
          className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-full md:w-1/2"
        />
        <div className="flex items-center w-full md:w-1/2 gap-3">
          <input
            placeholder="Phone"
            type="text"
            className="w-1/2 py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
          />
          <select className="w-1/2 appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded">
            <option value="" disabled selected>
              Year of Graduation (Set)
            </option>
            {dates.map((date) => (
              <option key={date.value} value={date.value}>
                {date.nosaSet}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* ========================== */}
      <div className="flex flex-col md:flex-row items-center gap-5 w-full mb-5">
        <div className="flex  w-full md:w-1/2 gap-5">
          <select className="w-1/2 appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded">
            <option value="" disabled selected>
              Employment Status
            </option>
            {employmentStatus.map((s) => (
              <option key={s.value} value={s.value}>
                {s.status}
              </option>
            ))}
          </select>
          <input
            placeholder="Current Job"
            type="text"
            className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-1/2"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center gap-3">
          <input
            placeholder="Enter Employer (Place of work)"
            type="text"
            className="w-full py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
          />
          {/* <select className="w-[30%] appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded">
            <option value="" disabled selected>
              Country of Residence
            </option>
            {countries?.data?.map((s) => (
              <option key={s.country} value={s.country}>
                {s.country}
              </option>
            ))}
          </select> */}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
