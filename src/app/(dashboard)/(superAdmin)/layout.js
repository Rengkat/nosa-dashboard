"use client";
import SubHeading from "@/app/components/SubHeading";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const SupperAdminLayout = ({ children }) => {
  const { admin } = useSelector((state) => state.app);

  // Check if the user is a superadmin
  const isAuthorized = admin?.role === "superAdmin";

  // If not authorized, show the unauthorized modal
  if (!isAuthorized) {
    return (
      <div className="relative">
        <div className="fixed bg-[#00000061] backdrop-blur-sm z-50 rounded-md inset-0  grid place-items-center">
          <div className="bg-white w-[80%] lg:size-[50%] p-10 md:p-5 text-base lg:text-xl text-center flex flex-col justify-center rounded-md">
            <p> Sorry, You are not authorized to access this page.</p>
            <p> Only Super Admin can access this page.</p>
            <div className="mt-5">
              <Link href="/">
                <button className="bg-primary-500 text-white cursor-pointer py-2 md:py-3 px-4 md:px-6 rounded">
                  Go Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If authorized, render the children
  return (
    <div className="relative">
      <div>{children}</div>
    </div>
  );
};

export default SupperAdminLayout;
