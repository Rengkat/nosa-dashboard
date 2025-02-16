"use client";
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const ContentEditor = ({ onChange }) => {
  const config = {
    height: 300,
    menubar: false,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table paste code help wordcount",
    ],
    toolbar:
      "undo redo | formatselect | bold italic underline strikethrough | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | link image | removeformat | help",
    placeholder: "Start typing...",
    setup: (editor) => {
      editor.on("change", () => {
        const content = editor.getContent();
        onChange(content); // Pass the updated content to the parent component
      });
    },
  };

  return <Editor apiKey="gmkr4cdx7s765hvm63qgsczn3hqtuuxnuksjk9qfqmajoqpq" init={config} />;
};

export default ContentEditor;
