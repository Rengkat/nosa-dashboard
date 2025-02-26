"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ActiveLink } from "./ActiveLink";
import { useSelector } from "react-redux";

const SingleSetLayout = ({ children, params }) => {
  const { admin } = useSelector((state) => state.app);

  // Check if the admin is either a superadmin or belongs to the specific set
  const isAuthorized = admin?.role === "superAdmin" || admin?.nosaSet === params?.nosaSet;

  // If not authorized, open the modal
  if (!isAuthorized) {
    return (
      <div className="relative">
        <div className="absolute bg-[#00000061] backdrop-blur-sm rounded-md inset-0 h-[80vh] grid place-items-center">
          <div className="bg-white w-[80%] lg:size-[50%] p-10 md:p-5 text-base lg:text-xl text-center flex flex-col justify-center rounded-md">
            <p> Sorry, You are not authorized to access this NOSA Set.</p>
            <p> You are only allowed to access your set page!</p>
            <div className="mt-5">
              <Link href="/nosa-sets">
                <button className="bg-primary-500 text-white cursor-pointer py-2 md:py-3 px-4 md:px-6 rounded">
                  Select Different Set
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="my-[3rem]">
        <div className="inline bg-gray-200 py-7 px-5 rounded">
          <ActiveLink href={`/nosa-sets/${params.nosaSet}`} name={"Members"} />
          <ActiveLink href={`/nosa-sets/${params.nosaSet}/events`} name={"Events"} />
          <ActiveLink href={`/nosa-sets/${params.nosaSet}/media`} name={"Media"} />
          <ActiveLink href={`/nosa-sets/${params.nosaSet}/posts`} name={"Posts"} />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SingleSetLayout;
