import { IoIosArrowDown } from "react-icons/io";
import { dates } from "../_utils/page";
const AddAdmin = () => {
  // const dates = [];

  // for (let i = 1978; i <= 2050; i++) {
  //   dates.push({
  //     nosaSet: `NOSA ${i}`,
  //     value: `${i}`,
  //   });
  // }

  return (
    <div className="bg-gray-200 rounded-md shadow my-10 px-5 py-10">
      <div className="relative my-5">
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

      <Form />
      <div className="flex justify-end my-7">
        {/* <button className="bg-red-700 text-white py-3 px-6 shadow rounded">
          Remove As Set Admin
        </button> */}
        <button className="bg-primary-500 text-white py-3 px-5 md:px-6 shadow rounded">
          Make Set Admin
        </button>
      </div>
    </div>
  );
};

export default AddAdmin;

export const Form = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <div className="w-full md:w-1/2">
        <select className="appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-full">
          <option value="" disabled selected>
            Select Full Name
          </option>
        </select>
      </div>

      <div className="flex items-center gap-3 w-full md:w-1/2">
        <input
          placeholder="Email"
          type="email"
          className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-[70%]"
        />
        <input
          placeholder="Phone"
          type="text"
          className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-[70%]"
        />
      </div>
    </div>
  );
};
