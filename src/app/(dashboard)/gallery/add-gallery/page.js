import SubHeading from "@/app/components/SubHeading";
import React from "react";

const AddGallery = () => {
  const num = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <SubHeading
        isLink={true}
        link={"/gallery"}
        text={"Add Gallery"}
        buttonText={"Back to Gallery"}
        isButton={false}
      />
      <div className="w-full gap-5 flex my-5">
        <div className="w-[100%]">
          <div className=" bg-gray-200 rounded shadow p-5 h-[60vh]">
            <div className="flex flex-col lg:flex-row gap-5">
              <div class="flex w-full lg:w-[30%] ">
                <input id="file-upload" type="file" class="sr-only" />
                <label
                  for="file-upload"
                  class="w-full lg:w-[20rem] h-[10vh] lg:h-[12rem] cursor-pointer flex items-center justify-center bg-white text-gray-600 rounded">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14m-7-7v14"
                    />
                  </svg>
                  <span>Upload Image</span>
                </label>
              </div>
              {/* right side of image */}
              <div className=" flex flex-col w-full lg:w-[70%] gap-3">
                <input type="text" className="w-full py-3 px-5 outline-none" placeholder="Tile" />
                <input
                  type="text"
                  className="w-full py-3 px-5 outline-none"
                  placeholder="Caption"
                />
                <button className="bg-primary-500 py-3 px-5 text-white">Add to Gallery</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGallery;
