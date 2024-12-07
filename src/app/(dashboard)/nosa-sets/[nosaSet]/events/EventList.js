"use client";
import React, { useState, useEffect } from "react";

const EventsList = () => {
  const [events, setEvents] = useState([]); // List of events
  const [selectedEvent, setSelectedEvent] = useState(null); // Current event to view/edit

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events"); // Replace with your API endpoint
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Handle event selection
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  // Handle back to list
  const handleBackToList = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="p-6">
      {!selectedEvent ? (
        // Event List View
        <div>
          <h1 className="text-2xl font-bold mb-4">Events</h1>
          {events.length === 0 ? (
            <p>No events available.</p>
          ) : (
            <ul className="space-y-4">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="p-4 bg-white shadow-md rounded-md cursor-pointer hover:bg-gray-100"
                  onClick={() => handleEventClick(event)}>
                  <h2 className="text-lg font-semibold">{event.title}</h2>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        // Event Details View
        <EventDetails event={selectedEvent} onBack={handleBackToList} />
      )}
    </div>
  );
};

export default EventsList;
