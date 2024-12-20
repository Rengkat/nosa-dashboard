import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
});
