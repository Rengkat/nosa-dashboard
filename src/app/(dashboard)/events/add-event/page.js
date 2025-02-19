"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  usePostEventMutation,
  useUploadEventImageMutation,
} from "../../../../../Redux/services/EventsApiSlice";

const ContentEditor = dynamic(() => import("./Content"), { ssr: false });

const AddEvent = () => {
  const [addEvent] = usePostEventMutation();
  const [uploadImage] = useUploadEventImageMutation();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState("");
  const [venue, setVenue] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const [isPopular, setIsPopular] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await uploadImage(formData).unwrap();
        console.log(response);
        setImageUrl(response.imgUrl);
        showNotification("Image uploaded successfully!", "success");
      } catch (error) {
        showNotification("Failed to upload image", "error");
      }
    }
  };

  const handleVenueChange = (e) => {
    const { name, value } = e.target;
    setVenue((prevVenue) => ({
      ...prevVenue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !title ||
      !content ||
      !imageUrl ||
      !dateOfEvent ||
      !venue.name ||
      !venue.address ||
      !venue.city ||
      !venue.state ||
      !venue.country ||
      !venue.zipCode
    ) {
      showNotification("Please fill in all fields and upload an image.", "error");
      return;
    }

    const formData = {
      title,
      description,
      dateOfEvent,
      venue,
      content,
      image: imageUrl,
      isPopular,
    };

    try {
      await addEvent(formData).unwrap();
      showNotification("Event published successfully!", "success");
      setTitle("");
      setDescription("");
      setDateOfEvent("");
      setVenue({
        name: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      });
      setContent("");
      setImageUrl("");
      setIsPopular(false);
      setSelectedUser("");
    } catch (error) {
      showNotification("Failed to publish event", "error");
    }
  };

  return (
    <div className="w-full gap-5 flex flex-col lg:flex-row my-5">
      {notification.message && (
        <div
          className={`p-3 rounded text-white text-center ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}>
          {notification.message}
        </div>
      )}

      <div className="w-full md:w-[75%]">
        <form onSubmit={handleSubmit} className="bg-gray-200 rounded-md shadow p-5 h-auto">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full md:w-[30%] items-center">
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
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Uploaded preview"
                  className="mt-3 w-full h-auto rounded-md"
                />
              )}
            </div>

            <div className="flex flex-col w-[100%] gap-3">
              <input
                type="text"
                className="w-full py-3 px-5 outline-none"
                placeholder="Event Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="text"
                className="w-full py-3 px-5 outline-none"
                placeholder="Event Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <input
                type="datetime-local"
                className="w-full py-3 px-5 outline-none"
                value={dateOfEvent}
                onChange={(e) => setDateOfEvent(e.target.value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  className="w-full py-3 px-5 outline-none"
                  placeholder="Venue Name"
                  name="name"
                  value={venue.name}
                  onChange={handleVenueChange}
                />
                <input
                  type="text"
                  className="w-full py-3 px-5 outline-none"
                  placeholder="Venue Address"
                  name="address"
                  value={venue.address}
                  onChange={handleVenueChange}
                />
                <input
                  type="text"
                  className="w-full py-3 px-5 outline-none"
                  placeholder="City"
                  name="city"
                  value={venue.city}
                  onChange={handleVenueChange}
                />
                <input
                  type="text"
                  className="w-full py-3 px-5 outline-none"
                  placeholder="State"
                  name="state"
                  value={venue.state}
                  onChange={handleVenueChange}
                />
                <input
                  type="text"
                  className="w-full py-3 px-5 outline-none"
                  placeholder="Country"
                  name="country"
                  value={venue.country}
                  onChange={handleVenueChange}
                />
                <input
                  type="text"
                  className="w-full py-3 px-5 outline-none"
                  placeholder="Zip Code"
                  name="zipCode"
                  value={venue.zipCode}
                  onChange={handleVenueChange}
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isPopular}
                    onChange={(e) => setIsPopular(e.target.checked)}
                  />
                  <span>Is Popular</span>
                </label>
              </div>

              <ContentEditor onChange={handleContentChange} />
              <button type="submit" className="bg-primary-500 py-3 px-5 text-white">
                Publish Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
