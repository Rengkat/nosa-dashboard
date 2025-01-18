import React from "react";
import { useUploadBannerImageMutation } from "../../../../../Redux/services/NosaSetApiSlice";

export const BannerInput = ({ setBanner }) => {
  const [upload] = useUploadBannerImageMutation();
  const uploadImage = async () => {};
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Banner Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setBanner(e.target.files[0])}
        className="block w-full py-3 px-5 text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      />
    </div>
  );
};
