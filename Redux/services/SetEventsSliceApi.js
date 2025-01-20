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
  }),
});
export const { useAddSetEventMutation } = setEventsSlice;
