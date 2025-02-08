import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
const NOSA_SET_ADMINS = "set-admins";
export const setApiSlice = createApi({
  reducerPath: "setAdminSlice",
  tagTypes: ["SetAdmin"],
  baseQuery: baseUrl,
  endpoints: (build) => ({
    getAllSetAdmin: build.query({
      query: () => NOSA_SET_ADMINS,
      providesTags: ["SetAdmin"],
    }),
    makeSetAdmin: build.mutation({
      query: (data) => ({
        url: NOSA_SET_ADMINS,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["SetAdmin"],
    }),

    removeSetAdmin: build.mutation({
      query: () => ({
        url: `${NOSA_SET_ADMINS}`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});
export const { useMakeSetAdminMutation, useGetAllSetAdminQuery, useRemoveSetAdminMutation } =
  setApiSlice;
