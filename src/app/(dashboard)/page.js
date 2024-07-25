import { Fragment } from "react";
import { TableHeading } from "../_utils/page";

export default function Home() {
  return (
    <main className=" bg-primary">
      <div className="flex justify-between my-5">
        <div className=" size-64 bg-gray-200 rounded "></div>
        <div className=" size-64 bg-gray-200 rounded "></div>
        <div className=" size-64 bg-gray-200 rounded "></div>
        <div className=" size-64 bg-gray-200 rounded "></div>
      </div>
      <div className=" bg-gray-200 rounded w-full h-[60vh] my-5 p-5">
        <div className="text-2xl font-bold text-gray-600 w-1/2 py-5">All Nosa Members</div>
        <div className="flex justify-center">
          <input
            type="text"
            className="w-[60%] p-3 rounded outline-none border-[2px] border-gray-300"
            placeholder="Search Nosa member"
          />
        </div>
        <div>
          <div className="grid grid-cols-6 text-xl font-semibold capitalize my-5">
            {TableHeading.map((head, i) => {
              return (
                <Fragment key={i}>
                  <div className={` `}>{head}</div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
