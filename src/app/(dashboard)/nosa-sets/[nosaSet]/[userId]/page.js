"use client";

import { dates } from "@/app/_utils/page";
import { Form } from "@/app/components/AddAdmin";
import SubHeading from "@/app/components/SubHeading";
import React, { useEffect, useState } from "react";
import { useGetSingleUserQuery } from "../../../../../../Redux/services/UsersApiSlice";
import Loading from "@/app/(auth)/loading";

const UserDetail = ({ params }) => {
  const { userId, nosaSet } = params;
  const { data, isLoading, isError } = useGetSingleUserQuery(userId);
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedSet, setSelectedSet] = useState("");

  // Update state when data changes
  useEffect(() => {
    if (data) {
      const { user } = data;
      setFirstName(user?.firstName || "");
      setSurname(user?.surname || "");
      setEmail(user?.email || "");
      setPhone(user?.phone || "");
      setAddress(user?.address || "");
      setSelectedSet(user?.nosaSet || "");
    }
  }, [data]);

  // Loading state
  if (isLoading) {
    return <Loading />;
  }

  // Error handling
  if (isError) {
    return <div>Error fetching user data. Please try again later.</div>;
  }

  const handleUpdateMember = () => {
    // Add logic to update member
    console.log("Update Member:", { firstName, surname, email, phone, address, selectedSet });
  };

  const handleBlockMember = () => {
    // Add logic to block member
    console.log("Block Member:", userId);
  };

  const handleDeleteMember = () => {
    // Add logic to delete member
    console.log("Delete Member:", userId);
  };

  return (
    <div className="w-full bg-gray-200 my-5 p-10 shadow rounded">
      <SubHeading
        text=""
        isButton={false}
        isLink={true}
        link={`/nosa-sets/${nosaSet}`}
        buttonText="Back to Set Manage Set"
      />

      <div className="flex items-center gap-5 w-full mb-5">
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          className="appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-full"
        />
        <input
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="Enter Surname"
          value={surname}
          className="appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-full"
        />
      </div>

      <div className="flex items-center gap-5 w-full mb-5">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-1/2"
        />
        <div className="flex items-center w-1/2 gap-3">
          <input
            placeholder="Phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-[70%]"
          />
          <select
            value={selectedSet}
            onChange={(e) => setSelectedSet(e.target.value)}
            className="appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded">
            <option value="" disabled>
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full py-4 px-7 border-[1px] border-gray-400 outline-none rounded"
        />
      </div>

      <div className="flex justify-center my-5 gap-3">
        <button
          onClick={handleUpdateMember}
          className="bg-primary-500 text-white text-xl py-4 px-10 shadow rounded">
          Update Member
        </button>
        <button
          onClick={handleBlockMember}
          className="bg-gray-500 text-white text-xl py-4 px-10 shadow rounded">
          Block Member
        </button>
        <button
          onClick={handleDeleteMember}
          className="bg-red-700 text-white text-xl py-4 px-10 shadow rounded">
          Delete Member
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
