"use client";
import React, { useState } from "react";
import EventsList from "./EventList";

const Events = () => {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    image: null, // For storing the uploaded image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventDetails({ ...eventDetails, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const formData = new FormData();
    formData.append("title", eventDetails.title);
    formData.append("date", eventDetails.date);
    formData.append("time", eventDetails.time);
    formData.append("location", eventDetails.location);
    formData.append("description", eventDetails.description);
    if (eventDetails.image) {
      formData.append("image", eventDetails.image);
    }

    console.log("Submitting Event:", eventDetails);
    // API call to backend goes here
  };

  return (
    <div className="py-10">
      <div className="w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Create New Event</h2>
        <form onSubmit={handleSubmit}>
          {/* Event Title and Date*/}
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

            {/* Event Date */}
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

          {/* Event Time and Location */}
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

            {/* Event Location */}
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
          {/* Event Description */}
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

          {/* Event Image */}
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
          </div>

          {/* Preview Image */}
          {eventDetails.image && (
            <div className="mb-4">
              <p className="text-sm text-gray-700">Preview:</p>
              <img
                src={URL.createObjectURL(eventDetails.image)}
                alt="Event Preview"
                className="w-full h-52 object-cover rounded-md shadow-md mt-2"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200">
            Save Event
          </button>
        </form>
      </div>
      <EventsList />
    </div>
  );
};

export default Events;
