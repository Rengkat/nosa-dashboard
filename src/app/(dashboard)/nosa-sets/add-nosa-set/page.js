"use client";

import { dates } from "@/app/_utils/page";
import { useState } from "react";
import { useAddSetMutation } from "../../../../../Redux/services/NosaSetApiSlice";
import { BannerInput } from "./BannerInput";
import { CoverImageInput } from "./CoverImageInput";

const AddSet = () => {
  const [year, setYear] = useState("");
  const [banner, setBanner] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [description, setDescription] = useState("");
  const [addSet] = useAddSetMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("year", year);
    formData.append("banner", banner);
    formData.append("coverImage", coverImage);
    formData.append("description", description);
    console.log(formData);
  };

  return (
    <div className="bg-gray-200 my-[3rem] shadow rounded-md p-5">
      <h1 className="font-bold text-xl">Add New Nosa Set</h1>
      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        {/* Graduation Year Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-primary-500 text-white appearance-none cursor-pointer py-2 md:py-4 px-5 md:px-7 border-[1px] border-gray-400 outline-none rounded w-full lg:w-[20%]">
            <option disabled value="">
              Select a Graduation Year
            </option>
            {dates.map((date) => (
              <option key={date.value} value={date.value}>
                {date.year}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          {/* Banner Upload */}
          <BannerInput setBanner={setBanner} />
          {/* Cover Image Upload */}
          <CoverImageInput setCoverImage={setCoverImage} />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a brief description about the NOSA set"
            rows="4"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600">
          Add NOSA Set
        </button>
      </form>
    </div>
  );
};

export default AddSet;
