import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
const USERS_URL = "users";

export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: baseUrl,
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getVerifiedUsers: build.query({
      query: () => ({
        url: `${USERS_URL}`,
      }),
      invalidatesTags: ["Users"],
    }),
    getUnverifiedUsers: build.query({
      query: () => ({
        url: `${USERS_URL}/unverified-users`,
      }),
      invalidatesTags: ["Users"],
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
      }),
      invalidatesTags: ["Users"],
    }),
    updateCurrentUser: build.mutation({
      query: () => ({
        url: `${USERS_URL}/updateCurrentUser`,
        method: "PUT",
      }),
      invalidatesTags: ["Users"],
    }),
    adminVerifyUser: build.mutation({
      query: (id) => ({
        url: `${USERS_URL}/verify-by-setAdmin`,
        method: "PATCH",
        body: id,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUserByAdmin: build.mutation({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    uploadUserImage: build.mutation({
      query: (image) => ({
        url: `${USERS_URL}/${id}`,
        method: "POST",
        body: image,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});
export const {
  useGetUnverifiedUsersQuery,
  useGetVerifiedUsersQuery,
  useGetSingleUserQuery,
  useUpdateCurrentUserMutation,
  useUpdateUserByAdminMutation,
  useUploadUserImageMutation,
  useDeleteUserMutation,
} = usersApiSlice;
