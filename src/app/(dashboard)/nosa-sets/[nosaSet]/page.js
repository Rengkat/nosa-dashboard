import { mockData, SetTableHeading } from "@/app/_utils/page";
import SubHeading from "@/app/components/SubHeading";
import Link from "next/link";
import React, { Fragment } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import PendingRequest from "./PendingRequest";
import ApprovedUsers from "./ApprovedUsers";

const SpecificSet = ({ params }) => {
  const { nosaSet } = params;

  return (
    <div>
      {/* <SubHeading
        text={""}
        isButton={false}
        isLink={true}
        link={"/nosa-sets"}
        buttonText={"Back to Select Set"}
      /> */}

      <PendingRequest mockData={mockData} nosaSet={nosaSet} />
      <ApprovedUsers mockData={mockData} nosaSet={nosaSet} />
    </div>
  );
};

export default SpecificSet;
