"use client";
import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const ContentEditor = ({ onChange }) => {
  const editorRef = useRef(null);
  const [quillInstance, setQuillInstance] = useState(null);

  useEffect(() => {
    if (editorRef.current && !quillInstance) {
      // Ensure Quill is only initialized once
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });

      quill.on("text-change", () => {
        const content = quill.root.innerHTML;
        if (onChange) {
          onChange(content);
        }
      });

      setQuillInstance(quill);
    }

    return () => {
      if (quillInstance) {
        // Clean up the editor instance when the component unmounts
        quillInstance.off("text-change");
      }
    };
  }, [quillInstance, onChange]);

  return <div ref={editorRef} style={{ height: "300px", background: "white" }}></div>;
};

export default ContentEditor;
