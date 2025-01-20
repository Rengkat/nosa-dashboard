"use client";
import React, { useState } from "react";
import EventsList from "./EventList";
import {
  useAddSetEventMutation,
  useUploadEventImageMutation,
} from "../../../../../../Redux/services/SetEventsSliceApi";

const Events = ({ params }) => {
  const { nosaSet } = params;
  const [addEvent, { isLoading: adding }] = useAddSetEventMutation();
  const [uploadImage, { isLoading: uploading }] = useUploadEventImageMutation();
  const [eventDetails, setEventDetails] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    image: null,
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: "error", text: "File size must not exceed 5MB." });
        return;
      }

      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await uploadImage(formData).unwrap();
        setMessage({ type: "success", text: "Image uploaded successfully!" });
        setEventDetails({ ...eventDetails, image: response?.eventImgUrl || "" });
      } catch (error) {
        setMessage({ type: "error", text: "Failed to upload image. Try again." });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...eventDetails, bannerImage: eventDetails.image, nosaSet };
      const response = await addEvent(payload).unwrap();
      setMessage({ type: "success", text: response?.message || "Event added successfully!" });
      setEventDetails({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
        image: null,
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: error?.data?.message || "Failed to add event. Try again.",
      });
    }
  };

  return (
    <div className="py-10">
      <div className="w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Create New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 mb-4">
            <div className="w-1/2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Event Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter event title"
                value={eventDetails.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={eventDetails.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-5 mb-4">
            <div className="w-1/2">
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Event Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={eventDetails.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Event Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter event location"
                value={eventDetails.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Event Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Enter a brief description of the event"
              value={eventDetails.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Event Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            {message.text && (
              <p
                className={`mt-2 text-sm ${
                  message.type === "success" ? "text-green-600" : "text-red-600"
                }`}>
                {message.text}
              </p>
            )}
            {uploading && <p className="mt-2 text-sm text-blue-600">Uploading...</p>}
          </div>
          {eventDetails.image && typeof eventDetails.image === "string" && (
            <div className="mb-4">
              <p className="text-sm text-gray-700">Preview:</p>
              <img
                src={eventDetails.image}
                alt="Event Preview"
                className="w-full h-52 object-cover rounded-md shadow-md mt-2"
              />
            </div>
          )}
          <button
            type="submit"
            disabled={adding || uploading}
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200">
            {adding ? "Saving..." : "Save Event"}
          </button>
        </form>
      </div>
      <EventsList />
    </div>
  );
};

export default Events;
