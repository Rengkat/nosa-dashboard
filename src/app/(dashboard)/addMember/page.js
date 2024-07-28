import React from "react";

const AddMember = () => {
  const dates = [];

  for (let i = 1978; i <= 2050; i++) {
    dates.push({
      nosaSet: `NOSA ${i}`,
      value: `${i}`,
    });
  }
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
            className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-[70%]"
          />
          <select className=" appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded">
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
      </div>
      <div>
        <textarea
          placeholder="Enter Address"
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
