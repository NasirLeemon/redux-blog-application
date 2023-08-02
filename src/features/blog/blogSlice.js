import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog } from "./blogApi";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};
export const fetchBlog = createAsyncThunk(
  "blog/fetchBlog",

  async (id) => {
    const blog = await getBlog(id);

    return blog;
  }
);

const blogsSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchBlog.pending, (state,action)=>{
        state.isError = false;
        state.isLoading = true;
    })
    .addCase(fetchBlog.fulfilled, (state,action)=>{
        state.isError = false;
        state.isLoading = false;
        state.blog = action.payload
    })
    .addCase(fetchBlog.rejected, (state,action)=>{
        state.isError = true;
        state.isLoading = false;
        state.error = action.payload
        state.blog = {}
    })
  }
});

export default blogsSlice.reducer
