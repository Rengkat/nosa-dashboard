import React from "react";

const Education = () => {
  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Education;
