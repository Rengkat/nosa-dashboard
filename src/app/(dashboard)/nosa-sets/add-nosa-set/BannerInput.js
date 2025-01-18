import React, { useState } from "react";
import { useUploadBannerImageMutation } from "../../../../../Redux/services/NosaSetApiSlice";

export const BannerInput = ({ setBanner }) => {
  const [upload, { isLoading }] = useUploadBannerImageMutation();
  const [message, setMessage] = useState({ type: "", text: "" });

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: "error", text: "File size must not exceed 5MB." });
        return;
      }

      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await upload(formData).unwrap();
        setMessage({ type: "success", text: "Image uploaded successfully!" });
        setBanner(response?.imageUrl || "");
      } catch (error) {
        setMessage({ type: "error", text: "Failed to upload image. Try again." });
      }
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Banner Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={uploadImage}
        className="block w-full py-3 px-5 text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        disabled={isLoading}
      />
      {message.text && (
        <p
          className={`mt-2 text-sm ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}>
          {message.text}
        </p>
      )}
      {isLoading && <p className="mt-2 text-sm text-blue-600">Uploading...</p>}
    </div>
  );
};
