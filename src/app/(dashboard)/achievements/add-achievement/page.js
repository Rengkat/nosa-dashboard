import SubHeading from "@/app/components/SubHeading";
import React from "react";

const AddAchievements = () => {
  return (
    <div className="w-full my-5">
      <SubHeading
        isLink={true}
        link={"/achievements"}
        text={"Add Achievement"}
        buttonText={"Back to Achievements"}
        isButton={false}
      />
      <div className="w-[100%] my-5">
        <div className=" bg-gray-200 rounded shadow p-10 h-[60vh]">
          <div className="flex gap-5">
            <div className=" flex flex-col w-[70%] gap-3">
              <input
                type="text"
                className="w-full py-3 px-5 outline-none"
                placeholder="Select Achievement category"
              />
              <textarea
                type="text"
                className="w-full py-3 px-5 outline-none h-[100px]"
                placeholder="Write achievement..."
              />
              <button className="bg-primary-500 py-3 px-5 text-white">Add Achievement</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAchievements;
