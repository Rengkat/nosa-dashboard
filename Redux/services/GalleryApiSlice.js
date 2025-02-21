import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
const GALLERY_URL = "gallery";

export const galleryApiSlice = createApi({
  reducerPath: "galleryApi",
  baseQuery: baseUrl,
  tagTypes: ["Gallery"],
  endpoints: (build) => ({
    // Get all gallery images
    getAllGalleryImages: build.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: GALLERY_URL,
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["Gallery"],
    }),
    // Add to gallery
    addToGallery: build.mutation({
      query: (data) => ({
        url: `/${GALLERY_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Gallery"],
    }),
    // Get a single gallery image
    getSingleGalleryImage: build.query({
      query: ({ id }) => ({
        url: `/${GALLERY_URL}/${id}`,
      }),
    }),
    // Update gallery
    updateGallery: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/${GALLERY_URL}/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Gallery"],
    }),
    // Delete from gallery
    deleteFromGallery: build.mutation({
      query: (id) => ({
        url: `/${GALLERY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Gallery"],
    }),
    // Upload image
    uploadGalleryImage: build.mutation({
      query: (data) => ({
        url: `/${GALLERY_URL}/uploadImage`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Gallery"],
    }),
  }),
});

export const {
  useGetAllGalleryImagesQuery,
  useAddToGalleryMutation,
  useGetSingleGalleryImageQuery,
  useUpdateGalleryMutation,
  useDeleteFromGalleryMutation,
  useUploadGalleryImageMutation,
} = galleryApiSlice;
