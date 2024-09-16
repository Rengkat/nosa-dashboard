"use client";
import React, { useState } from "react";
import ContentEditor from "./Content";

const AddBlog = () => {
  const categories = ["news", "blog", "event"];
  const [content, setContent] = useState("");

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleSubmit = () => {
    const formData = {
      content,
    };

    // submit data
  };

  return (
    <div className="w-full gap-5 flex my-5">
      <div className="w-[75%]">
        <div className=" bg-gray-200 rounded-md shadow p-5">
          <div className="flex gap-5">
            {/* Image Upload */}
            <div className="flex w-[30%]">
              <input id="file-upload" type="file" className="sr-only" />
              <label
                htmlFor="file-upload"
                className="size-[12rem] cursor-pointer flex items-center justify-center bg-white text-gray-600 rounded">
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
              <input type="text" className="w-full py-3 px-5 outline-none" placeholder="Title" />

              {/* Quill Content Editor */}
              <ContentEditor onChange={handleContentChange} />

              <button className="bg-primary-500 py-3 px-5 text-white" onClick={handleSubmit}>
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[25%]">
        <div className="bg-gray-200 rounded-md shadow p-5">
          <h3 className="font-semibold py-3">Categories:</h3>
          <div className="flex flex-col">
            {categories.map((n) => (
              <div
                className="capitalize border-[1px] border-gray-300 my-[1px] p-2 cursor-pointer hover:bg-gray-300"
                key={n}>
                {n}
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Selected Categories"
            className="p-2 w-full my-1 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
