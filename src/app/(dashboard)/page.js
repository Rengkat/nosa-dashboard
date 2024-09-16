import { Fragment } from "react";
import { dashboardStats, mockData, TableHeading } from "../_utils/page";
import { MdNavigateNext, MdNavigateBefore, MdLeaderboard } from "react-icons/md";
import SubHeading from "../components/SubHeading";
import { IoIosPeople } from "react-icons/io";
import { FaNewspaper } from "react-icons/fa";
const me = [2, 3, 4, 6];
export default function Home() {
  return (
    <main className=" bg-primary">
      <div className="flex justify-between my-5">
        {dashboardStats.map((stat, i) => {
          return (
            <Fragment key={i}>
              <div className="w-64 bg-gray-200 rounded p-5 ">
                <div className="flex items-center gap-5">
                  <div className=" text-2xl size-[3rem] bg-[#289fe073] text-[#28a0e0] rounded-full grid place-items-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl">{stat.number}</div>
                </div>
                <div className="my-5">{stat.name}</div>{" "}
              </div>
            </Fragment>
          );
        })}
      </div>
      <SubHeading
        text={"NOSA Members"}
        isButton={false}
        buttonText={"Add a Member"}
        isLink={true}
        link={"/addMember"}
      />
      {/* table */}

      <div className=" bg-gray-200 rounded w-full my-5 p-8">
        <div className="flex justify-center mt-[2rem]">
          <input
            type="text"
            className="w-[40%] p-3 rounded outline-none border-[2px] border-gray-300"
            placeholder="Search Nosa member"
          />
        </div>
        <div>
          <div className="grid-tableHead text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
            {TableHeading.map((head, i) => {
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
                  className="grid-table border-b-[1px] py-2 border-gray-300 even:bg-gray-300  hover:opacity-[60%] cursor-pointer"
                  key={user.phone}>
                  <div className="mt-2 pl-5">{i + 1}</div>
                  <div>{user?.name}</div>
                  <div>{user?.email}</div>
                  <div>{user?.phone}</div>
                  <div>{user?.nosaSet}</div>
                  <div>{user?.address}</div>
                </div>
              );
            })}
          </div>
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
    </main>
  );
}
