"use client";
import { Fragment, useState } from "react";
import { mockData, TableHeading } from "../_utils/page";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import SubHeading from "../components/SubHeading";

import Stats from "./Stats";
import { useGetVerifiedUsersQuery } from "../../../Redux/services/UsersApiSlice";
import Loading from "../(auth)/loading";

export default function Home() {
  const { data, isLoading } = useGetVerifiedUsersQuery({});
  const [searchedWord, setSearchedWord] = useState("");
  const filteredUsers =
    data?.users?.filter((user) =>
      user.fullName.toLowerCase().trim().includes(searchedWord.toLowerCase().trim())
    ) || [];

  // console.log(filteredUsers);
  if (isLoading) return <Loading />;
  return (
    <main className="bg-primary">
      <Stats />
      <SubHeading
        text={"NOSA Members"}
        isButton={false}
        buttonText={"Add a Member"}
        isLink={true}
        link={"/add-member"}
      />

      {/* Responsive table container */}
      <div className="bg-gray-200 rounded w-full my-5 p-8 overflow-x-auto">
        <div className="flex justify-center mt-[2rem]">
          <input
            onChange={(e) => setSearchedWord(e.target.value)}
            value={searchedWord}
            type="text"
            className="w-[70%] md:w-[40%] p-3 rounded outline-none border-[2px] border-gray-300"
            placeholder="Search Nosa member"
          />
        </div>

        <div>
          <div className="grid-tableHead text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
            {TableHeading.map((head, i) => {
              return (
                <Fragment key={i}>
                  <div
                    className={`truncate max-w-xs ${
                      head !== "s/No" && head !== "nosa set" ? "ml-[1rem]" : ""
                    } `}>
                    {head}
                  </div>
                </Fragment>
              );
            })}
          </div>

          {/* Table rows */}
          <div className="text-sm lg:text-base">
            {data?.users?.length < 1 ? (
              <div>No users yet</div>
            ) : (
              filteredUsers?.map((user, i) => {
                return (
                  <div
                    className="grid-table border-b-[1px] py-2 border-gray-300 even:bg-gray-300 hover:opacity-[60%] cursor-pointer"
                    key={user.phone}>
                    <div className="mt-2 pl-5">{i + 1}</div>
                    <div className="truncate max-w-xs">{user?.fullName}</div>
                    <div className="truncate max-w-xs">{user?.email}</div>
                    <div className="truncate max-w-xs">{user?.phone}</div>
                    <div>{user?.nosaSet?.name}</div>
                    <div className="truncate max-w-xs">
                      {user?.address ? user?.address : <p>No address yet</p>}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="w-full flex justify-end my-10 items-center">
          <button className="py-2 px-4 rounded shadow">
            <MdNavigateBefore fontSize={30} />
          </button>
          <span className="font-semibold px-2">{data?.currentPage}</span>
          <button className="py-2 px-4 rounded shadow bg-primary-500 text-white">
            <MdNavigateNext fontSize={30} />
          </button>
        </div>
      </div>
    </main>
  );
}
