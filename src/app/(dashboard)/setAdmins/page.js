import AddAdmin from "@/app/components/AddAdmin";
import SubHeading from "@/app/components/SubHeading";
import React from "react";

const SetAdmin = () => {
  return (
    <div>
      <SubHeading text={"Set Admins"} buttonText={"Add a Set Admin"} isButton={true} />
      <div>
        <AddAdmin />
      </div>
      <div className="bg-gray-200 rounded-md shadow my-10 p-5"></div>
    </div>
  );
};

export default SetAdmin;
