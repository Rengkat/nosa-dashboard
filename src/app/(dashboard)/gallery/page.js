import { galleryHeadings, mockData, newsHeadings } from "@/app/_utils/page";
import SubHeading from "@/app/components/SubHeading";
import Image from "next/image";
import React, { Fragment } from "react";
import { MdDelete, MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Gallery = () => {
  return (
    <div>
      <SubHeading text={"Gallery"} buttonText={"Add to Gallery"} isButton={true} />

      <div className="bg-gray-200 rounded-md shadow my-10 p-5">
        <div className="grid-gallery text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
          {galleryHeadings.map((head, i) => {
            return (
              <Fragment key={i}>
                <div
                  className={`${
                    head !== "s/No" && head !== "date" && head !== "category"
                      ? "ml-[3rem]"
                      : "ml-[1rem]"
                  } `}>
                  {head}
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="">
          {mockData.slice(0, 5).map((user, i) => {
            return (
              <div
                className="grid-gallery gap-x-5 border-b-[1px] py-3 border-gray-300 cursor-pointer"
                key={i}>
                <div className="mt-2 pl-5">{i + 1}</div>
                <div>
                  <Image src={"/Nosa.png"} height={500} width={500} className="rounded-md" />
                </div>
                <div className="mx-2">
                  Hello! I'm Alexander Rengkat, a Front-End Developer based in Jos, Plateau State,
                  Nigeria, with over 4 years of experience.
                </div>

                <div>Events and News</div>
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

export default Gallery;
