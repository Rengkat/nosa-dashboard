import React from "react";

export const CoverImageInput = ({ setCoverImage }) => {
  const uploadImage = async () => {};
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setCoverImage(e.target.files[0])}
        className="block w-full py-3 px-5  text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
      />
    </div>
  );
};
