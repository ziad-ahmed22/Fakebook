import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (action) => action.payload,
    postsResponse: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { getPosts, postsResponse } = PostsSlice.actions;

export default PostsSlice.reducer;
