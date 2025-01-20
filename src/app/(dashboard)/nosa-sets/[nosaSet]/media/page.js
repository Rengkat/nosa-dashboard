"use client";
import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import {
  useUploadMediaMutation,
  useDeleteMediaMutation,
  useFetchMediaBySetQuery,
} from "../redux/api/setMediaSlice";

const MediaDashboard = ({ params }) => {
  const { nosaSet } = params;
  const [uploadImage, setUploadImage] = useState(null);
  const { data, isLoading, refetch } = useFetchMediaBySetQuery(nosaSet);
  const [uploadMedia] = useUploadMediaMutation();
  const [deleteMedia] = useDeleteMediaMutation();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!uploadImage) return;

    const formData = new FormData();
    formData.append("images", uploadImage);

    try {
      const response = await uploadMedia(formData).unwrap();
      if (response.success) {
        setUploadImage(null);
        refetch();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleDelete = async (id, imageUrl) => {
    try {
      const response = await deleteMedia({ id, imageUrl }).unwrap();
      if (response.success) {
        refetch();
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Upload Section */}
      <div className="w-full bg-white rounded-md shadow-md p-5">
        <h2 className="font-bold text-lg mb-4">Media Gallery</h2>
        <form onSubmit={handleUpload} className="flex items-center gap-3">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setUploadImage(e.target.files[0])}
            className="block text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center gap-2 py-2 px-4 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700">
            <FaPlus />
            <span>Upload Image</span>
          </button>
        </form>
      </div>

      {/* Gallery Section */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-5 bg-gray-100 rounded-md shadow-md">
        {data?.setMedia?.map((image) => (
          <div
            key={image._id}
            className="relative h-48 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${image.imageUrl})` }}>
            <button
              onClick={() => handleDelete(image._id, image.imageUrl)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700">
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaDashboard;
