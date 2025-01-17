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
  }),
});
export const { useGetAllSetsQuery } = setApiSlice;
