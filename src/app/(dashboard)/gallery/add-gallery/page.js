"use client";
import SubHeading from "@/app/components/SubHeading";
import React, { useState } from "react";
import {
  useAddToGalleryMutation,
  useUploadGalleryImageMutation,
} from "../../../../../Redux/services/GalleryApiSlice";

const AddGallery = () => {
  const [addGallery] = useAddToGalleryMutation();
  const [uploadImage] = useUploadGalleryImageMutation();

  // State for form inputs
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle file input change
  const handleFileChange = async (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setUploading(true);
      try {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append("images", files[i]);
        }

        // Upload images to the server
        const response = await uploadImage(formData).unwrap();
        setImages(response.imgUrls);
        setErrorMessage("");
      } catch (error) {
        console.error("Error uploading images:", error);
        setErrorMessage("Failed to upload images. Please try again.");
      } finally {
        setUploading(false);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !images.length) {
      setErrorMessage("Please provide a title and upload at least one image.");
      return;
    }

    try {
      const galleryData = {
        title,
        caption,
        images,
        date: new Date().toISOString(),
      };

      // Add gallery data to the server
      await addGallery(galleryData).unwrap();
      setSuccessMessage("Gallery added successfully!");
      setErrorMessage(""); // Clear any previous error message

      // Reset form
      setTitle("");
      setCaption("");
      setImages([]);
    } catch (error) {
      console.error("Error adding gallery:", error);
      setErrorMessage("Failed to add gallery. Please try again.");
      setSuccessMessage(""); //
    }
  };

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
          <div className="bg-gray-200 rounded shadow p-5 h-[60vh]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col lg:flex-row gap-5">
                {/* File upload section */}
                <div className="flex w-full lg:w-[30%]">
                  <input
                    id="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    multiple
                    disabled={uploading}
                  />
                  <label
                    htmlFor="file-upload"
                    className="w-full lg:w-[20rem] h-[10vh] lg:h-[12rem] cursor-pointer flex items-center justify-center bg-white text-gray-600 rounded">
                    {uploading ? (
                      <span>Uploading...</span>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14m-7-7v14"
                          />
                        </svg>
                        <span>Upload Image</span>
                      </>
                    )}
                  </label>
                </div>

                {/* Right side of image */}
                <div className="flex flex-col w-full lg:w-[70%] gap-3">
                  <input
                    type="text"
                    className="w-full py-3 px-5 outline-none"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="w-full py-3 px-5 outline-none"
                    placeholder="Caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-primary-500 py-3 px-5 text-white"
                    disabled={uploading}>
                    Add to Gallery
                  </button>
                </div>
              </div>
            </form>

            {/* Display success and error messages */}
            {successMessage && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">{errorMessage}</div>
            )}

            {/* Display uploaded images in a grid */}
            {images.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Uploaded Images:</h3>
                <div className="grid grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image}
                        alt={`Uploaded ${index + 1}`}
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddGallery;
