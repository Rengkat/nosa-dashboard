import React from "react";

const AddAdmin = () => {
  const dates = [];

  for (let i = 1978; i <= 2050; i++) {
    dates.push({
      nosaSet: `NOSA ${i}`,
      value: `${i}`,
    });
  }

  return (
    <div className="bg-gray-200 rounded-md shadow my-10 p-5">
      <div>
        <label>Select NOSA Set:</label>
        <select className="py-4 px-6 border-[1px] border-gray-400 outline-none rounded">
          {dates.map((date) => (
            <option key={date} value={date.value}>
              {date.nosaSet}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center gap-10">
        <button className="bg-red-700 text-white py-3 px-6 shadow rounded">
          Remove As Set Admin
        </button>
        <button className="bg-primary-500 text-white py-3 px-6 shadow rounded">
          Make Set Admin
        </button>
      </div>
    </div>
  );
};

export default AddAdmin;
