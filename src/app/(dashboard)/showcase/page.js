import { mockData, newsHeadings } from "@/app/_utils/page";
import SubHeading from "@/app/components/SubHeading";
import Image from "next/image";
import React, { Fragment } from "react";
import { MdDelete, MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Showcase = () => {
  return (
    <div>
      <SubHeading
        text={"Showcase"}
        buttonText={"Add a Showcase"}
        isButton={false}
        link={"showcase/add-showcase"}
        isLink={true}
      />
      <div className="bg-gray-200 rounded-md shadow my-10 p-5">
        <div className="grid-news text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
          {newsHeadings.map((head, i) => {
            return (
              <Fragment key={i}>
                <div
                  className={`${head !== "s/No" && head !== "date" ? "ml-[2rem]" : "ml-[1rem]"} `}>
                  {head}
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="">
          {mockData.map((user, i) => {
            return (
              <div
                className="grid-news gap-x-5 border-b-[1px] py-3 border-gray-300 cursor-pointer overflow-x-auto"
                key={i}>
                <div className="mt-2 pl-5">{i + 1}</div>
                <div>
                  <Image src={"/Nosa.png"} height={500} width={500} className="rounded-md" />
                </div>
                <div className="mx-2 truncate max-w-xs md:max-w-md lg:max-w-none lg:whitespace-normal">
                  Hello! I'm Alexander Rengkat, a Front-End Developer based in Jos, Plateau State,
                  Nigeria, with over 4 years of experience.
                </div>

                <div>24/05/2024</div>
                <div className="flex justify-center">
                  <MdDelete fontSize={30} className="mr-10 text-primary-500" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-end my-10 items-center">
          <button className="py-2 px-4 rounded shadow">
            <MdNavigateBefore fontSize={30} />
          </button>
          <span className="font-semibold px-2">3</span>
          <button className="py-2 px-4 rounded shadow bg-primary-500 text-white">
            <MdNavigateNext fontSize={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
