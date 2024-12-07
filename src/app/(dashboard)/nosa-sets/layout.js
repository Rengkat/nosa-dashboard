import SubHeading from "@/app/components/SubHeading";
import React from "react";

const SetLayout = ({ children }) => {
  return (
    <div className="relative">
      <SubHeading text={"Manage Set"} isButton={false} buttonText={"Back to Select Set"} />
      <div>{children}</div>
    </div>
  );
};

export default SetLayout;
