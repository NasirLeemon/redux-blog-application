import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsApi";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};
export const fetchBlogs = createAsyncThunk(
  "posts/fetchPosts",

  async () => {
    const blogs = await getBlogs();

    return blogs;
  }
);

const blogssSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchBlogs.pending, (state,action)=>{
        state.isError = false;
        state.isLoading = true;
    })
    .addCase(fetchBlogs.fulfilled, (state,action)=>{
        state.isError = false;
        state.isLoading = false;
        state.blogs = action.payload
    })
    .addCase(fetchBlogs.rejected, (state,action)=>{
        state.isError = true;
        state.isLoading = false;
        state.error = action.payload
        state.blogs = []
    })
  }
});

export default blogssSlice.reducer
