// src/services/blogApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lang-master-server-abcmehedi5.vercel.app",
  }),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: () => "/blogs/blog",
      providesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `/blogs/blog/${id}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["Blog"],
    }),
    addBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/blogs/blog",
        method: "POST",
        body: newBlog,
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useAddBlogMutation,
} = blogApi;
