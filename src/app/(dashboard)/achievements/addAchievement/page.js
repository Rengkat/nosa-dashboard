import React from "react";

const AddAchievement = () => {
  const num = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full gap-5 flex my-5">
      <div className="w-full">
        <div className=" bg-gray-200 rounded-md shadow p-5">
          <div className="flex gap-5">
            <div class="flex w-[20%] ">
              <input id="file-upload" type="file" class="sr-only" />
              <label
                for="file-upload"
                class="size-[12rem] cursor-pointer flex items-center justify-center bg-white text-gray-600 rounded">
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
            <div className=" flex flex-col w-[80%] gap-3">
              <input type="text" className="w-full py-3 px-5 outline-none" placeholder="Tile" />
              <textarea placeholder="Content" className="p-5 outline-none" />
              <button className="bg-primary-500 py-3 px-5 text-white">Add to Gallery</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAchievement;
