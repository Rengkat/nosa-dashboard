import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
const AUTH_URL = "admin-auth";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: baseUrl,
  tagTypes: [],
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useLoginMutation } = authApiSlice;
