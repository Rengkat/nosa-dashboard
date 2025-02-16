import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
const EVENTS_URL = "events";

export const eventApiSlice = createApi({
  reducerPath: "blogsApi",
  baseQuery: baseUrl,
  tagTypes: ["Event"],
  endpoints: (build) => ({
    //get all Bogs and News
    getAllEvents: build.query({
      query: ({ category, page = 1, limit = 10 }) => ({
        url: EVENTS_URL,
        method: "GET",
        params: { category, page, limit },
      }),
      providesTags: ["Event"],
    }),
    postEvent: build.mutation({
      query: (data) => ({
        url: `/${EVENTS_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Event"],
    }),
    getDetailEvent: build.query({
      query: ({ id }) => ({
        url: `/${EVENTS_URL}/${id}`,
      }),
    }),
    uploadEventImage: build.mutation({
      query: (data) => ({
        url: `/${EVENTS_URL}/uploadImage`,
        method: "POST",
        body: data,
      }),
    }),
    deleteEvent: build.mutation({
      query: (id) => ({
        url: `/${EVENTS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Event"],
    }),
    updateEvent: build.mutation({
      query: (id) => ({
        url: `/${EVENTS_URL}/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Event"],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetDetailEventQuery,
  usePostEventMutation,
  useUploadEventImageMutation,
  useDeleteEventMutation,
  useUpdateEventMutation,
} = eventApiSlice;
