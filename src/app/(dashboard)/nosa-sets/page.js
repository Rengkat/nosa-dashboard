"use client";
import { dates } from "@/app/_utils/page";
import SubHeading from "@/app/components/SubHeading";
import { useRouter } from "next/navigation";
import { useGetAllSetsQuery } from "../../../../Redux/services/NosaSetApiSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const Sets = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const router = useRouter();
  const { data } = useGetAllSetsQuery();
  const { admin } = useSelector((state) => state.app);
  // console.log(admin);
  const onSelect = (set) => {
    if (admin?.role === "superAdmin" || set === admin?.nosaSet) {
      router.push(`nosa-sets/${set}`);
    } else {
      setIsModelOpen(true);
    }
  };
  return (
    <div>
      <SubHeading
        text={""}
        isButton={false}
        isLink={true}
        link={"/nosa-sets/add-nosa-set"}
        buttonText={"Add a NOSA Set"}
      />
      <div className="flex items-center my-5">
        <select
          onChange={(e) => onSelect(e.target.value)}
          className="bg-primary-500 text-white appearance-none cursor-pointer py-2 md:py-4 px-5 md:px-7 border-[1px] border-gray-400 outline-none rounded">
          <option disabled selected>
            Select a NOSA Set
          </option>
          {data?.sets?.map((date) => (
            <option key={date._id} value={date._id}>
              NOSA Set {date.name}
            </option>
          ))}
        </select>
      </div>
      {/* this will be implemented */}
      {isModalOpen && (
        <div className="absolute  bg-[#00000061] backdrop-blur-sm rounded-md inset-0 h-[80vh] grid place-items-center">
          <div className="bg-white w-[80%] lg:size-[50%] p-10 md:p-5 text-base lg:text-xl text-center flex flex-col justify-center rounded-md">
            <p> Sorry, You are not authorized to access this NOSA Set.</p>
            <p> You are only allowed to access your set page!</p>
            <div className="mt-5">
              <button
                onClick={() => setIsModelOpen(false)}
                className="bg-primary-500 text-white cursor-pointer py-2 md:py-3 px-4 md:px-6 rounded">
                Select Different Set
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sets;
