import { mockData, OfficialTableHeading } from "@/app/_utils/page";
import AddAdmin from "@/app/components/AddAdmin";
import SubHeading from "@/app/components/SubHeading";
import React, { Fragment } from "react";
import { MdDelete } from "react-icons/md";

const SetAdmin = () => {
  return (
    <div>
      <SubHeading text={"Set Admins"} buttonText={"Add a Set Admin"} isButton={true} />
      <div>
        <AddAdmin />
      </div>
      <div className="bg-gray-200 rounded-md shadow my-10 p-5">
        <div className="grid-official-tableHead text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
          {OfficialTableHeading.map((head, i) => {
            return (
              <Fragment key={i}>
                <div className={`${head !== "s/No" && head !== "nosa set" ? "ml-[1rem]" : ""} `}>
                  {head}
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="">
          {mockData.map((user, i) => {
            return (
              <div
                className="grid-official-table border-b-[1px] py-2 border-gray-300 even:bg-gray-300  hover:opacity-[60%] cursor-pointer"
                key={user.phone}>
                <div className="mt-2 pl-5">{i + 1}</div>
                <div>{user?.name}</div>
                <div>{user?.email}</div>
                <div>{user?.phone}</div>
                <div>{user?.nosaSet}</div>
                <div className="flex justify-center">
                  <MdDelete fontSize={30} className="mr-10 text-red-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetAdmin;
