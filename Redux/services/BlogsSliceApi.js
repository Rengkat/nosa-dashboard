import { createApi } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./BaseUrl";
const NEWS_BLOG_URL = "news-and-blogs";

export const blogApiSlice = createApi({
  reducerPath: "blogsApi",
  baseQuery: baseUrl,
  tagTypes: ["Blog"],
  endpoints: (build) => ({
    //get all Bogs and News
    getNewsAndBlogs: build.query({
      query: ({ category, page = 1, limit = 10 }) => ({
        url: NEWS_BLOG_URL,
        method: "GET",
        params: { category, page, limit },
      }),
      providesTags: ["Blog"],
    }),
    postBlogAndNews: build.mutation({
      query: (data) => ({
        url: `/${NEWS_BLOG_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),
    getDetailPost: build.query({
      query: ({ id }) => ({
        url: `/${NEWS_BLOG_URL}/${id}`,
      }),
    }),
    uploadNewsOrBlogImage: build.mutation({
      query: (data) => ({
        url: `/${NEWS_BLOG_URL}/uploadImage`,
        method: "POST",
        body: data,
      }),
    }),
    deletePost: build.mutation({
      query: (id) => ({
        url: `/${NEWS_BLOG_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetNewsAndBlogsQuery,
  useGetDetailPostQuery,
  usePostBlogAndNewsMutation,
  useUploadNewsOrBlogImageMutation,
  useDeletePostMutation,
} = blogApiSlice;
