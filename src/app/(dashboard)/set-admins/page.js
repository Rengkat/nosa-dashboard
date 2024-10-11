import { mockData, OfficialTableHeading } from "@/app/_utils/page";
import AddAdmin from "@/app/components/AddAdmin";
import SubHeading from "@/app/components/SubHeading";
import React, { Fragment } from "react";
import { MdDelete, MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const SetAdmin = () => {
  // const [isAddAdminForm, setIsAddAdmin] = useState(false);
  // const handleClick = () => {
  //   setIsAddAdmin((prev) => !prev);
  // };
  return (
    <div>
      <SubHeading
        text={"Set Admins"}
        buttonText={"Add a Set Admin"}
        isButton={false}
        isLink={true}
        link={"/addMember"}
      />
      <div>
        <AddAdmin />
      </div>
      <div className="bg-gray-200 rounded-md shadow my-10 p-5 overflow-x-auto">
        <div className="grid-official-tableHead lg:text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
          {OfficialTableHeading.map((head, i) => {
            return (
              <Fragment key={i}>
                <div className={`${head !== "s/No" && head !== "set" ? "ml-[1rem]" : ""} `}>
                  {head}
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="text-sm lg:text-base ">
          {mockData.map((user, i) => {
            return (
              <div
                className="grid-official-table border-b-[1px] py-2 border-gray-300 even:bg-gray-300  hover:opacity-[60%] cursor-pointer"
                key={user.phone}>
                <div className="mt-2 pl-5">{i + 1}</div>
                <div className="truncate max-w-xs">{user?.name}</div>
                <div className="truncate max-w-xs">{user?.email}</div>
                <div className="truncate max-w-xs">{user?.phone}</div>
                <div>{user?.nosaSet}</div>
                <div className="flex justify-center">
                  <MdDelete fontSize={30} className="mr-10 text-red-600" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-end my-10 items-center">
          <button className="py-2 px-4 rounded shadow">
            <MdNavigateBefore fontSize={30} />
          </button>
          <span className="font-semibold px-2">3</span>
          <button className="py-2 px-4 rounded shadow bg-primary-500 text-white">
            <MdNavigateNext fontSize={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetAdmin;
