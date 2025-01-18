"use client";

import { dates } from "@/app/_utils/page";
import { useState } from "react";
import { useAddSetMutation } from "../../../../../Redux/services/NosaSetApiSlice";
import { BannerInput } from "./BannerInput";
import { CoverImageInput } from "./CoverImageInput";
import { useRouter } from "next/navigation";

const AddSet = () => {
  const [year, setYear] = useState("");
  const [banner, setBanner] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [description, setDescription] = useState("");
  const [addSet, { isLoading }] = useAddSetMutation();
  const [message, setMessage] = useState({ type: "", text: "" });
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!year || !banner || !coverImage) {
      setMessage({ type: "error", text: "All fields are required!" });
      return;
    }

    const formData = new FormData();
    formData.append("nosaSet", year);
    formData.append("banner", banner);
    formData.append("coverImage", coverImage);
    formData.append("description", description);

    try {
      const response = await addSet(formData).unwrap();
      setMessage({ type: "success", text: response.message || "Set added successfully!" });
      setTimeout(() => {
        router.push("/nosa-sets");
      }, 3000);
      setYear("");
      setBanner(null);
      setCoverImage(null);
      setDescription("");
    } catch (error) {
      setMessage({
        type: "error",
        text: error?.data?.message || "Failed to add set. Please try again.",
      });
    }
  };

  return (
    <div className="bg-gray-200 my-12 shadow rounded-md p-6">
      <h1 className="font-bold text-xl mb-4">Add New NOSA Set</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Graduation Year Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-primary-500 text-white py-2 px-5 border-gray-400 rounded w-full lg:w-[20%]">
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

        {/* Image Uploads */}
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <BannerInput setBanner={setBanner} />
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"></textarea>
        </div>

        {/* Feedback Message */}
        {message.text && (
          <p
            className={`mt-2 text-sm ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}>
            {message.text}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}>
          {isLoading ? "Adding Set..." : "Add NOSA Set"}
        </button>
      </form>
    </div>
  );
};

export default AddSet;
