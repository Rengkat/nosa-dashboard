"use client";

const { useState } = require("react");
const { useAddSetEventMutation } = require("../../../../../../../Redux/services/SetEventsSliceApi");

const EventDetails = ({ event, onBack }) => {
  const [addEvent, { isLoading }] = useAddSetEventMutation();
  const [updatedEvent, setUpdatedEvent] = useState({ ...event });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent({ ...updatedEvent, [name]: value });
  };

  // Handle update event
  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/events/${event.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEvent),
      });

      if (response.ok) {
        alert("Event updated successfully!");
        onBack(); // Return to list view
      } else {
        alert("Failed to update event.");
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  // Handle delete event
  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/events/${event.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Event deleted successfully!");
        onBack(); // Return to list view
      } else {
        alert("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <button className="text-blue-500 mb-4 underline" onClick={onBack}>
        Back to Events
      </button>

      <h2 className="text-2xl font-bold mb-4">Event Details</h2>

      {/* Event Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={updatedEvent.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Event Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={updatedEvent.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Event Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={updatedEvent.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Event Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={updatedEvent.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows="4"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600">
          Delete Event
        </button>
        <button
          onClick={handleUpdate}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};
