import { mockData, SetTableHeading } from "@/app/_utils/page";
import Link from "next/link";
import React, { Fragment } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const SpecificSet = ({ params }) => {
  return (
    <div>
      <div className="bg-gray-200 p-5 shadow rounded mt-10">
        <div className="font-bold text-xl ">Pending Set {params.nosaSet} Requests</div>
        <div className="my-5">
          {mockData.slice(0, 3).map((user, i) => {
            return (
              <div key={i} className="pending-grid py-2 border-b-[1px] border-gray-300">
                <div className="pl-5">{i + 1}</div>
                <div className="text-xl">{user.name}</div>
                <div className="text-xl">{user.phone}</div>
                <div className="text-xl">{user.nosaSet}</div>
                <div className="flex gap-6">
                  <button className="py-3 px-6 shadow rounded bg-red-800 text-white">
                    Decline
                  </button>
                  <button className="py-3 px-6 shadow rounded bg-primary-500 text-white">
                    Accept
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-200 p-5 shadow rounded my-10">
        <div className="font-bold text-xl my-8">Approved {params.nosaSet} Set</div>
        <div className="grid-set-tableHead text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
          {SetTableHeading.map((head, i) => {
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
              <Link href={`/nosa-sets/${params.nosaSet}/${i + 1}`}>
                <div
                  className="grid-set-table border-b-[1px] py-2 border-gray-300 even:bg-gray-300  hover:opacity-[60%] cursor-pointer"
                  key={user.phone}>
                  <div className="mt-2 pl-5">{i + 1}</div>
                  <div>{user?.name}</div>
                  <div>{user?.email}</div>
                  <div>{user?.phone}</div>
                  <div>{user?.address}</div>
                  <div className="flex justify-center items-center capitalize">
                    <div
                      className={`${
                        user.status === "active"
                          ? "bg-green-400 text-green-900"
                          : "bg-red-300  text-red-900"
                      } py-2 px-3 rounded-lg`}>
                      {user?.status}
                    </div>
                  </div>
                </div>
              </Link>
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

export default SpecificSet;
