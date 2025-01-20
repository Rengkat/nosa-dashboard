import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
const SET_EVENT_URL = "set-events";
export const setEventsSlice = createApi({
  reducerPath: "setEvents",
  baseQuery: baseUrl,
  tagTypes: ["SetEvent"],
  endpoints: (build) => ({
    addSetEvent: build.mutation({
      query: (data) => ({
        method: "POST",
        url: SET_EVENT_URL,
        body: data,
      }),
      invalidatesTags: ["SetEvent"],
    }),
    uploadEventImage: build.mutation({
      query: (data) => ({
        url: `${SET_EVENT_URL}/upload-event-image`,
        method: "POST",
        body: data,
      }),
    }),
    getSetEvents: build.query({
      query: (setId) => ({
        url: `${SET_EVENT_URL}?setId=${setId}`,
      }),
      invalidatesTags: ["SetEvent"],
    }),
    deleteEvent: build.mutation({
      query: (id) => ({
        url: `${SET_EVENT_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useAddSetEventMutation,
  useUploadEventImageMutation,
  useGetSetEventsQuery,
  useDeleteEventMutation,
} = setEventsSlice;
