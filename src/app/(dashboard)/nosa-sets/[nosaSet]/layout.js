import SubHeading from "@/app/components/SubHeading";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "./ActiveLink";

const SingleSetLayout = ({ children, params }) => {
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
