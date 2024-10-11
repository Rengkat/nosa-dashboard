"use client";
import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const ContentEditor = ({ onChange }) => {
  const editorRef = useRef(null);
  const [quillInstance, setQuillInstance] = useState(null);
  useEffect(() => {
    if (editorRef.current && !quillInstance) {
      // Initialize Quill only if it hasn't been initialized yet
      const quill = new Quill(editorRef.current, {
        theme: "snow", // Use the Snow theme
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"], // Clear formatting button
          ],
        },
      });

      quill.on("text-change", () => {
        const content = quill.root.innerHTML; // Get content in HTML format
        if (onChange) {
          onChange(content); // Pass the content to the parent component
        }
      });

      setQuillInstance(quill); // Save the instance so it won't reinitialize
    }
  }, [quillInstance, onChange]);

  return <div ref={editorRef} style={{ height: "200px", background: "white" }}></div>; // Create the editor div
};

export default ContentEditor;
