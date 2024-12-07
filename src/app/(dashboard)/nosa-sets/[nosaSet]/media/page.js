"use client";
import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const sampleImages = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
];

const MediaDashboard = () => {
  const [images, setImages] = useState(sampleImages);
  const [uploadImage, setUploadImage] = useState(null);

  // Fetch images from the backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/media"); // Replace with your backend API
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  // Handle image upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!uploadImage) return;

    const formData = new FormData();
    formData.append("file", uploadImage);

    try {
      const response = await fetch("/api/media/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newImage = await response.json();
        setImages((prev) => [...prev, newImage.url]);
        setUploadImage(null);
      } else {
        console.error("Upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Handle image deletion
  const handleDelete = async (imageUrl) => {
    try {
      const response = await fetch(`/api/media/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: imageUrl }),
      });

      if (response.ok) {
        setImages((prev) => prev.filter((img) => img !== imageUrl));
      } else {
        console.error("Deletion failed.");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

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
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-48 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${image})` }}>
            <button
              onClick={() => handleDelete(image)}
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
