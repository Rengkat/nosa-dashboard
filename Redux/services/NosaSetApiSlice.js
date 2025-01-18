import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
const NOSA_SET_URL = "nosa-sets";
export const setApiSlice = createApi({
  reducerPath: "setSlice",
  tagTypes: ["Set"],
  baseQuery: baseUrl,
  endpoints: (build) => ({
    getAllSets: build.query({
      query: () => NOSA_SET_URL,
      providesTags: ["Set"],
    }),
    addSet: build.mutation({
      query: (data) => ({
        url: NOSA_SET_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Set"],
    }),
    updateSet: build.mutation({
      query: (setId, data) => ({
        url: `${NOSA_SET_URL}/${setId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Set"],
    }),
    uploadBannerImage: build.mutation({
      query: (data) => ({
        url: `${NOSA_SET_URL}/upload-banner`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Set"],
    }),
    uploadCoverImage: build.mutation({
      query: (data) => ({
        url: `${NOSA_SET_URL}/upload-cover-image`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Set"],
    }),
    getVerifiedSetMembers: build.query({
      query: (id) => ({
        url: `${NOSA_SET_URL}/${id}/verified-members`,
      }),
      invalidatesTags: ["Users"],
    }),
    getUnverifiedSetMembers: build.query({
      query: (id) => ({
        url: `${NOSA_SET_URL}/${id}/unverified-members`,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});
export const {
  useGetAllSetsQuery,
  useAddSetMutation,
  useUpdateSetMutation,
  useUploadBannerImageMutation,
  useUploadCoverImageMutation,
  useGetUnverifiedSetMembersQuery,
  useGetVerifiedSetMembersQuery,
} = setApiSlice;
