import React from "react";

const Address = () => {
  return (
    <div>
      {/* ================= */}
      <h1 className="font-bold text-2xl my-5">Address</h1>
      <div className="flex items-center gap-5 w-full mb-5">
        <div className="flex w-1/2 gap-5">
          <select className="w-1/2 appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded">
            <option value="" disabled selected>
              Country of Residence
            </option>
            {/* {countries?.data?.map((s) => (
              <option key={s.country} value={s.country}>
                {s.country}
              </option>
            ))} */}
          </select>
          <select className="w-1/2 appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded">
            <option value="" disabled selected>
              State of Residence
            </option>
            {/* {countries?.data?.map((s) => (
              <option key={s.country} value={s.country}>
                {s.country}
              </option>
            ))} */}
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
    </div>
  );
};

export default Address;
