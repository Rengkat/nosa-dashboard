"use client";
import { eventsHeadings } from "@/app/_utils/page"; // Update headings for events
import SubHeading from "@/app/components/SubHeading";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { MdDelete, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import {
  useDeleteEventMutation,
  useGetAllEventsQuery,
} from "../../../../Redux/services/EventsApiSlice"; // Update API slice imports
import Loading from "@/app/(auth)/loading";

const Events = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [deleteEvent] = useDeleteEventMutation(); // Use delete event mutation
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imageErrors, setImageErrors] = useState({});

  const { data, isLoading } = useGetAllEventsQuery({ page, limit }); // Fetch events

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      await deleteEvent(id).unwrap(); // Use deleteEvent mutation
      setSuccessMessage("Event deleted successfully!");
      setErrorMessage("");

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage("Failed to delete event.");
      setSuccessMessage("");

      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  // Handle image fallback
  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <SubHeading
        text="Events Update" // Update heading text
        buttonText="Add an Event" // Update button text
        isButton={false}
        isLink={true}
        link="/events/add-event" // Update link to add event
      />
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <div className="bg-gray-200 rounded-md shadow my-10 p-5 overflow-x-auto">
        {/* Table Header */}
        <div className="grid-events text-xl font-semibold capitalize py-5 my-2 border-b-2 border-gray-400">
          {eventsHeadings.map((head, i) => (
            <Fragment key={i}>
              <div className={`${head !== "s/No" && head !== "date" ? "ml-[2rem]" : "ml-[1rem]"}`}>
                {head}
              </div>
            </Fragment>
          ))}
        </div>

        {/* Events List */}
        <div>
          {data?.data.map((event, i) => (
            <div
              className="grid-events gap-x-5 border-b-[1px] py-3 border-gray-300 cursor-pointer"
              key={event._id}>
              <div className="mt-2 pl-5">{i + 1}</div>
              <div>
                <Image
                  src={imageErrors[event._id] ? "/Nosa.png" : event.image || "/Nosa.png"}
                  alt="event image"
                  className="rounded-md h-[100px] w-[100px] object-cover"
                  onError={() => handleImageError(event._id)}
                />
              </div>
              <div className="mx-2 truncate max-w-xs md:max-w-md lg:max-w-none lg:whitespace-normal">
                {event.title}
              </div>
              <div>{new Date(event.createdAt).toLocaleDateString()}</div>
              <div className="flex justify-center">
                <MdDelete
                  fontSize={30}
                  className="mr-10 text-primary-500"
                  onClick={() => handleDelete(event._id)} // Delete event
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="w-full flex justify-end my-10 items-center">
          <button
            className="py-2 px-4 rounded shadow"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page === 1}>
            <MdNavigateBefore fontSize={30} />
          </button>
          <span className="font-semibold px-2">{page}</span>
          <button
            className="py-2 px-4 rounded shadow bg-primary-500 text-white"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page >= (data?.totalPages || 1)}>
            <MdNavigateNext fontSize={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
