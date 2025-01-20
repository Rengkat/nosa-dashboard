"use client";

import SubHeading from "@/app/components/SubHeading";
import React, { useEffect, useState } from "react";
import {
  useDeleteUserMutation,
  useGetSingleUserQuery,
  useUpdateUserByAdminMutation,
} from "../../../../../../Redux/services/UsersApiSlice";
import Loading from "@/app/(auth)/loading";
import { useGetAllSetsQuery } from "../../../../../../Redux/services/NosaSetApiSlice";
import { useRouter } from "next/navigation";

const UserDetail = ({ params }) => {
  const { userId, nosaSet } = params;
  const { data, isLoading, isError, refetch } = useGetSingleUserQuery(userId);
  const { data: sets } = useGetAllSetsQuery();
  const [update, { isLoading: updating }] = useUpdateUserByAdminMutation();
  const [deleteUser, { isLoading: deleting }] = useDeleteUserMutation();
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [selectedSet, setSelectedSet] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const router = useRouter();
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

  const handleUpdateMember = async () => {
    try {
      await update({
        id: userId,
        details: { firstName, surname, email, phone, address, setId: selectedSet },
      }).unwrap();
      refetch();
      setMessage("User updated successfully.");
      setError("");
      setTimeout(() => {
        router.push(`/nosa-sets/${nosaSet}`);
      }, 3000);
    } catch (error) {
      setError("Failed to update user. Please try again.");
      setMessage("");
    }
  };

  const handleBlockMember = async () => {
    try {
      const newStatus = data?.user?.status === "active" ? "blocked" : "active";
      const res = await update({
        id: userId,
        details: { status: newStatus },
      }).unwrap();
      refetch();
      setMessage(
        `User has been ${newStatus === "blocked" ? "blocked" : "unblocked"} successfully.`
      );
      setError("");
      setTimeout(() => {
        router.push(`/nosa-sets/${nosaSet}`);
      }, 3000);
    } catch (error) {
      setError("Failed to update user status. Please try again.");
      setMessage("");
    }
  };

  const handleDeleteMember = async () => {
    try {
      await deleteUser(userId).unwrap();
      refetch();
      setMessage(`User ${data?.user?.fullName} has been deleted successfully.`);
      setError("");
      setShowDeleteConfirm(false);
      setTimeout(() => {
        router.push(`/nosa-sets/${nosaSet}`);
      }, 3000);
    } catch (error) {
      setError("Failed to delete user. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="w-full bg-gray-200 my-5 p-10 shadow rounded relative">
      <SubHeading
        text=""
        isButton={false}
        isLink={true}
        link={`/nosa-sets/${nosaSet}`}
        buttonText="Back to Set Manage Set"
      />

      {message && <div className="bg-green-100 text-green-800 p-3 rounded mb-5">{message}</div>}
      {error && <div className="bg-red-100 text-red-800 p-3 rounded mb-5">{error}</div>}

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
            <option disabled selected>
              Select a NOSA Set
            </option>
            {sets?.sets?.map((date) => (
              <option key={date._id} value={date._id}>
                NOSA Set {date.name}
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
          {data?.user?.status === "active" ? "Block Member" : "Unblock Member"}
        </button>
        <button
          onClick={() => setShowDeleteConfirm(true)}
          className="bg-red-700 text-white text-xl py-4 px-10 shadow rounded">
          Delete Member
        </button>
      </div>

      {showDeleteConfirm && (
        <div className="fixed bg-black inset-0 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 rounded shadow-lg text-center">
            <p>Are you sure you want to delete {data?.user?.fullName} from this set?</p>
            <div className="flex justify-center mt-5 gap-5">
              <button
                onClick={handleDeleteMember}
                className="bg-red-700 text-white py-3 px-8 rounded">
                Yes
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="bg-gray-500 text-white py-3 px-8 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
