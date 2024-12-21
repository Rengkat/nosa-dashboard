import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
const STATS_URL = "stats";

export const statsApiSlice = createApi({
  reducerPath: "statsApi",
  baseQuery: baseUrl,
  tagTypes: [],
  endpoints: (build) => ({
    getStats: build.query({
      query: () => ({
        url: `${STATS_URL}`,
      }),
    }),
  }),
});
export const { useGetStatsQuery } = statsApiSlice;
