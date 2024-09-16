import { dates } from "@/app/_utils/page";
import { Form } from "@/app/components/AddAdmin";
import SubHeading from "@/app/components/SubHeading";
import React from "react";

const UserDetail = ({ params }) => {
  return (
    <div className="w-full bg-gray-200 my-5 p-10 shadow rounded">
      <SubHeading
        text={""}
        isButton={false}
        isLink={true}
        link={`/nosa-sets/${params.nosaSet}`}
        buttonText={`Back to Set ${params.nosaSet}`}
      />

      <div className="flex items-center gap-5 w-full mb-5">
        <input
          type="text"
          placeholder="Enter First Name"
          value={"Alexander"}
          className="appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-full"
        />
        <input
          type="text"
          placeholder="Enter Surname"
          value={"Rengkat"}
          className="appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-full"
        />
      </div>

      <div className="flex items-center gap-5 w-full mb-5">
        <input
          placeholder="Email"
          value={"rengkatalexander06@gmail.com"}
          type="email"
          className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-1/2"
        />
        <div className="flex items-center w-1/2 gap-3">
          <input
            placeholder="Phone"
            type="text"
            value={"08067581175"}
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
          value={" No 3 LEA Primary School, Sabon Barki, Gindiri, Plateau State"}
          className="w-full py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
        />
      </div>
      <div className="flex justify-center my-5 gap-3">
        <button className="bg-primary-500 text-white text-xl py-4 px-10 shadow rounded">
          Update Member
        </button>
        <button className="bg-gray-500 text-white text-xl py-4 px-10 shadow rounded">
          Block Member
        </button>
        <button className="bg-red-700 text-white text-xl py-4 px-10 shadow rounded">
          Delete Member
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
