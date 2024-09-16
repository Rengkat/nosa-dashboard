import { dates, employmentStatus } from "@/app/_utils/page";
import React from "react";

const AddMember = async () => {
  const res = await fetch("https://countriesnow.space/api/v0.1/countries");
  const countries = await res.json();
  console.log(countries?.data);
  return (
    <div className="w-full bg-gray-200 my-5 p-10 shadow rounded">
      <div className="flex items-center gap-5 w-full mb-5">
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
      <div className="flex items-center gap-5 w-full mb-5">
        <input
          placeholder="Email"
          type="email"
          className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-1/2"
        />
        <div className="flex items-center w-1/2 gap-3">
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
      <div className="flex items-center gap-5 w-full mb-5">
        <div className="flex w-1/2 gap-5">
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

        <div className="w-1/2 flex items-center gap-3">
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
      {/* ================= */}
      <h1 className="font-bold text-2xl my-5">Address</h1>
      <div className="flex items-center gap-5 w-full mb-5">
        <div className="flex w-1/2 gap-5">
          <select className="w-1/2 appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded">
            <option value="" disabled selected>
              Country of Residence
            </option>
            {countries?.data?.map((s) => (
              <option key={s.country} value={s.country}>
                {s.country}
              </option>
            ))}
          </select>
          <select className="w-1/2 appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded">
            <option value="" disabled selected>
              State of Residence
            </option>
            {countries?.data?.map((s) => (
              <option key={s.country} value={s.country}>
                {s.country}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/2 flex items-center gap-3">
          <input
            placeholder="Enter current address"
            type="text"
            className="w-full py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
          />
        </div>
      </div>
      {/* =========== */}
      <h1 className="font-bold text-2xl my-5">Education</h1>
      <div className="flex items-center gap-5 w-full mb-5">
        <div className="flex w-1/2 gap-5">
          <input
            placeholder="Primary Education"
            type="text"
            className="w-full py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
          />
        </div>
        <div className="flex w-1/2 gap-5">
          <input
            placeholder="Secondary Education "
            type="text"
            className="w-full py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 w-full mb-5">
        <div className="flex w-1/2 gap-5">
          <input
            placeholder="Undergraduate Education"
            type="text"
            className="w-full py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
          />
        </div>
        <div className="flex w-1/2 gap-5">
          <input
            placeholder="Postgraduate Education "
            type="text"
            className="w-full py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 w-full mb-5">
        <div className="flex w-1/2 gap-5">
          <input
            placeholder="Training and Other Qualifications "
            type="text"
            className="w-full py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
          />
        </div>
        <div className="flex w-1/2 gap-5"></div>
      </div>
      <button className="bg-primary-500 py-3 px-5 mb-5 rounded shadow text-white">
        Add More Qualifications
      </button>
      <div>
        <textarea
          placeholder="About"
          className="w-full py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
        />
      </div>

      <div className="flex justify-end my-5">
        <button className="bg-primary-500 text-white text-xl py-4 px-10 shadow rounded">
          Add Member
        </button>
      </div>
    </div>
  );
};

export default AddMember;
