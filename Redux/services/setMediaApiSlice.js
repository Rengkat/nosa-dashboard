import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
const SET_EVENT_MEDIA = "set-media";
export const setMediaSlice = createApi({
  reducerPath: "setEvents",
  baseQuery: baseUrl,
  tagTypes: ["SetMedia"],
  endpoints: (builder) => ({
    uploadMedia: builder.mutation({
      query: (formData) => ({
        url: `${SET_EVENT_MEDIA}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["SetMedia"],
    }),
    deleteMedia: builder.mutation({
      query: ({ id, imageUrl }) => ({
        url: `${SET_EVENT_MEDIA}`,
        method: "DELETE",
        body: { imageUrl },
      }),
      invalidatesTags: ["SetMedia"],
    }),
    fetchMediaBySet: builder.query({
      query: (setId) => ({
        url: `${SET_EVENT_MEDIA}`,
        method: "GET",
      }),
      providesTags: ["SetMedia"],
    }),
  }),
});
export const { useUploadMediaMutation, useDeleteMediaMutation, useFetchMediaBySetQuery } =
  setMediaSlice;
