import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";

const SET_EVENT_MEDIA = "set-media";

export const setMediaSlice = createApi({
  reducerPath: "setMedia",
  baseQuery: baseUrl,
  tagTypes: ["SetMedia"],
  endpoints: (builder) => ({
    // Add an image
    uploadMedia: builder.mutation({
      query: (formData) => ({
        url: `${SET_EVENT_MEDIA}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["SetMedia"],
    }),
    // Upload media images
    uploadImages: builder.mutation({
      query: (formData) => ({
        url: `${SET_EVENT_MEDIA}/upload-media-image`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["SetMedia"],
    }),
    // Delete media by ID
    deleteMedia: builder.mutation({
      query: ({ id, imageUrl }) => ({
        url: `${SET_EVENT_MEDIA}/${id}`,
        method: "DELETE",
        body: { imageUrl },
      }),
      invalidatesTags: ["SetMedia"],
    }),
    // Fetch all media for a set
    fetchAllMedia: builder.query({
      query: (setId) => ({
        url: `${SET_EVENT_MEDIA}?setId=${setId}`,
        method: "GET",
      }),
      providesTags: ["SetMedia"],
    }),
    // Fetch single media detail by ID
    fetchSingleMedia: builder.query({
      query: (id) => ({
        url: `${SET_EVENT_MEDIA}/${id}`,
        method: "GET",
      }),
      providesTags: ["SetMedia"],
    }),
  }),
});

export const {
  useUploadMediaMutation,
  useUploadImagesMutation,
  useDeleteMediaMutation,
  useFetchAllMediaQuery,
  useFetchSingleMediaQuery,
} = setMediaSlice;
