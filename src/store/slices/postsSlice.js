import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  currentPage: 0,
};

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (action) => action.payload,
    postsResponse: (state, action) => {
      state.posts = action.payload?.data;
      state.currentPage = action.payload?.meta?.current_page;
    },
  },
});

export const { getPosts, postsResponse } = PostsSlice.actions;

export default PostsSlice.reducer;
