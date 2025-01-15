"use client";
import React, { Fragment } from "react";
import { dashboardStats } from "../_utils/page";
import { useGetStatsQuery } from "../../../Redux/services/StatsApiSlice";
import { IoIosPeople } from "react-icons/io";
import { FaBlogger, FaLayerGroup } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

const Stats = () => {
  const { data } = useGetStatsQuery();
  console.log(data);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-5">
      <div className="bg-gray-200 rounded p-5">
        <div className="flex items-center gap-5">
          <div className="text-2xl size-[3rem] bg-[#289fe073] text-[#28a0e0] rounded-full grid place-items-center">
            <IoIosPeople />
          </div>
          <div className="text-2xl">{data?.totalMembers}</div>
        </div>
        <div className="my-5">Total NOSA Members</div>
      </div>
      <div className="bg-gray-200 rounded p-5">
        <div className="flex items-center gap-5">
          <div className="text-2xl size-[3rem] bg-[#289fe073] text-[#28a0e0] rounded-full grid place-items-center">
            <FaLayerGroup />
          </div>
          <div className="text-2xl">{data?.totalSets}</div>
        </div>
        <div className="my-5">Present NOSA Sets</div>
      </div>
      <div className="bg-gray-200 rounded p-5">
        <div className="flex items-center gap-5">
          <div className="text-2xl size-[3rem] bg-[#289fe073] text-[#28a0e0] rounded-full grid place-items-center">
            <FaBlogger />
          </div>
          <div className="text-2xl">{data?.TotalBlogsAndNews}</div>
        </div>
        <div className="my-5">Blog Posts/ News</div>
      </div>
      <div className="bg-gray-200 rounded p-5">
        <div className="flex items-center gap-5">
          <div className="text-2xl size-[3rem] bg-[#289fe073] text-[#28a0e0] rounded-full grid place-items-center">
            <MdEmojiEvents />
          </div>
          <div className="text-2xl">{data?.events}</div>
        </div>
        <div className="my-5">Events</div>
      </div>
    </div>
  );
};

export default Stats;
