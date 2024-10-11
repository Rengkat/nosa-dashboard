"use client";
import { dates, employmentStatus } from "@/app/_utils/page";
import dynamic from "next/dynamic";
import BasicInfo from "./BasicInfo";
import Address from "./Address";
import Education from "./Education";

const ProfileDetail = dynamic(() => import("./ProfileContent"), { ssr: false });

const AddMember = () => {

  return (
    <div className="w-full bg-gray-200 my-5 p-10 shadow rounded">
      <BasicInfo />
      <Address />
      <Education />
      <div>
        <ProfileDetail />
      </div>

      <div className="flex justify-end my-5">
        <button className="bg-primary-500 text-white text-xl py-4 px-10 shadow rounded">
          Add Member
        </button>
      </div>
    </div>
  );
};

export default AddMember;
