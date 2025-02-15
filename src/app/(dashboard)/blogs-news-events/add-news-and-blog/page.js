"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  usePostBlogAndNewsMutation,
  useUploadNewsOrBlogImageMutation,
} from "../../../../../Redux/services/BlogsSliceApi";
const ContentEditor = dynamic(() => import("./Content"), { ssr: false });

const AddBlog = () => {
  const [handlePostBlogAndNews] = usePostBlogAndNewsMutation();
  const [uploadImage] = useUploadNewsOrBlogImageMutation();
  const categories = ["news", "blog", "event"];
  const [content, setContent] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
    );
  };

  const handleFileChange = async (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      content,
      categories: selectedCategories,
      file,
    };
    console.log(formData);
    // Submit data to an API or handle it as needed
  };

  return (
    <div className="w-full gap-5 flex flex-col lg:flex-row my-5">
      <div className="w-full md:w-[75%]">
        <form onSubmit={handleSubmit} className="bg-gray-200 rounded-md shadow p-5 h-auto">
          <div className="flex flex-col md:flex-row gap-5">
            {/* Image Upload */}
            <div className="flex w-full md:w-[30%]">
              <input id="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
              <label
                htmlFor="file-upload"
                className="w-full h-[10vh] md:size-[12rem] cursor-pointer flex items-center justify-center bg-white text-gray-600 rounded">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7-7v14"
                  />
                </svg>
                <span>Upload Image</span>
              </label>
            </div>

            {/* Right side of image */}
            <div className="flex flex-col w-[100%] gap-3">
              <input
                type="text"
                className="w-full py-3 px-5 outline-none"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              {/* Quill Content Editor */}
              <ContentEditor onChange={handleContentChange} />
              <button type="submit" className="bg-primary-500 py-3 px-5 text-white">
                Publish
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-[25%]">
        <div className="bg-gray-200 rounded-md shadow p-5">
          <h3 className="font-semibold py-3">Categories:</h3>
          <div className="flex flex-col">
            {categories.map((category) => (
              <div
                className={`capitalize border-[1px] border-gray-300 my-[1px] p-2 cursor-pointer hover:bg-gray-300 ${
                  selectedCategories.includes(category) ? "bg-gray-300" : ""
                }`}
                key={category}
                onClick={() => handleCategoryClick(category)}>
                {category}
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Selected Categories"
            className="p-2 w-full my-1 outline-none"
            value={selectedCategories.join(", ")}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
