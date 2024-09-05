// src/features/blogSlice.js
import { createSlice } from "@reduxjs/toolkit";

const blogslice = createSlice({
  name: "blogs",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchBlogsStart(state) {
      state.loading = true;
    },
    fetchBlogsSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchBlogsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addBlog(state, action) {
      state.items.push(action.payload);
    },
    updateBlog(state, action) {
      const index = state.items.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteBlog(state, action) {
      state.items = state.items.filter((blog) => blog.id !== action.payload);
    },
  },
});

export const {
  fetchBlogsStart,
  fetchBlogsSuccess,
  fetchBlogsFailure,
  addBlog,
  updateBlog,
  deleteBlog,
} = blogslice.actions;

export default blogslice.reducer;
