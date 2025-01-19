"use client";
import { SetTableHeading } from "@/app/_utils/page";
import Link from "next/link";
import React, { Fragment } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Loading from "@/app/(auth)/loading";
import { useRouter } from "next/navigation";
import { useGetVerifiedSetMembersQuery } from "../../../../../Redux/services/NosaSetApiSlice";

const ApprovedUsers = ({ mockData, nosaSet }) => {
  const { data, isLoading } = useGetVerifiedSetMembersQuery(nosaSet);
  if (isLoading) <Loading />;
  return (
    <div className="bg-gray-200 p-5 shadow rounded my-10 overflow-x-auto">
      <div className="font-bold text-xl my-8">Approved Set</div>
      <div className="grid-set-tableHead text-base md:text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
        {SetTableHeading.map((head, i) => {
          return (
            <Fragment key={i}>
              <div
                className={`truncate max-w-xs ${
                  head !== "s/No" && head !== "set" ? "ml-[1rem]" : ""
                } `}>
                {head}
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className="text-sm lg:text-base">
        {data?.users?.length < 1 ? (
          <div>No users in this set yet</div>
        ) : (
          data?.data?.map((user, i) => {
            return (
              <Link key={user?._id} href={`/nosa-sets/${nosaSet}/${user?._id}`}>
                <div
                  className="grid-set-table border-b-[1px] py-2 border-gray-300 even:bg-gray-300  hover:opacity-[60%] cursor-pointer"
                  key={user.phone}>
                  <div className="pl-4">{i + 1}.</div>
                  <div className="truncate max-w-xs">{user?.fullName}</div>
                  <div className="truncate max-w-xs">{user?.email}</div>
                  <div className="truncate max-w-xs">{user?.phone || "Null"}</div>
                  <div className="truncate max-w-xs">{user?.address || "No address yet"}</div>
                  <div className="flex justify-center items-center capitalize">
                    <div
                      className={`${
                        user.status === "active"
                          ? "bg-green-400 text-green-900"
                          : "bg-red-300  text-red-900"
                      } py-[2px] md:py-2 px-[4px] md:px-3 rounded-lg`}>
                      {user?.status}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        )}
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
  );
};

export default ApprovedUsers;
