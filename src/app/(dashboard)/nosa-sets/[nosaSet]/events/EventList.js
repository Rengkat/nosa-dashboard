"use client";
import React, { useState } from "react";
import {
  useDeleteEventMutation,
  useGetSetEventsQuery,
} from "../../../../../../Redux/services/SetEventsSliceApi";
import Loading from "@/app/(auth)/loading";

const EventsList = ({ nosaSet }) => {
  const { data, isLoading, isError, refetch } = useGetSetEventsQuery(nosaSet);
  const [deleteEvent, { isLoading: deleting }] = useDeleteEventMutation();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [message, setMessage] = useState({ type: "", text: "" });

  if (isLoading) return <Loading />;

  if (isError) {
    return <p className="text-red-500">Failed to load events. Please try again later.</p>;
  }

  const events = data?.events || [];

  const handleEventClick = async (event) => {
    try {
      setSelectedEvent(event);
      setMessage({ type: "", text: "" });
    } catch (error) {
      console.error("Error selecting event:", error);
    }
  };

  const handleBackToList = () => {
    setSelectedEvent(null);
    setMessage({ type: "", text: "" });
  };

  const handleDeleteEvent = async (id) => {
    try {
      await deleteEvent(id).unwrap();
      setMessage({ type: "success", text: "Event deleted successfully." });
      refetch();
    } catch (error) {
      console.error("Error deleting event:", error);
      setMessage({ type: "error", text: "Failed to delete event. Please try again." });
    }
  };

  const EventItem = ({ event }) => (
    <div
      key={event._id}
      className="p-4 bg-white flex justify-between shadow-md rounded-md cursor-pointer hover:bg-gray-100"
      onClick={() => handleEventClick(event)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${event.title}`}>
      <div>
        <h2 className="text-lg font-semibold">{event.title}</h2>
        <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteEvent(event?._id);
        }}
        className="bg-red-500 text-white rounded-md shadow py-2 px-4 m-2"
        aria-label={`Delete event ${event.title}`}>
        Delete
      </button>
    </div>
  );

  return (
    <div className="p-6">
      {/* Display message */}
      {message.text && (
        <div
          className={`mb-4 p-4 rounded-md ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
          {message.text}
        </div>
      )}

      {!selectedEvent ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Events</h1>
          {events.length === 0 ? (
            <p>No events available.</p>
          ) : (
            <ul className="space-y-4">
              {events.map((event) => (
                <EventItem event={event} key={event._id} />
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>
          <button
            onClick={handleBackToList}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            aria-label="Back to events list">
            Back to Events List
          </button>
          <div className="p-4 bg-white shadow-md rounded-md">
            <img
              src={selectedEvent.bannerImage}
              alt={selectedEvent.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {new Date(selectedEvent.date).toLocaleDateString()} at {selectedEvent.time}
            </p>
            <p className="text-gray-800 mb-4">{selectedEvent.location}</p>
            <p className="text-gray-700">{selectedEvent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsList;
