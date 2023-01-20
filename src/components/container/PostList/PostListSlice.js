import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// T-66 build refine thunk

// T-65 fix thunk functionality

// DONE!! GOAL: fix fetch behavior for home posts

export const FetchHomePosts = createAsyncThunk(
  "posts/FetchHomePosts",
  async (sort) => {
    const endpoint = "https://www.reddit.com/" + sort + ".json?";
    console.log(sort)
    const result = await fetch(endpoint);
    const json = await result.json();
    return json;
  }
);

export const FetchSearchPosts = createAsyncThunk(
  "posts/FetchSearchPosts",
  async (searchTerm/* , sort */) => {
    /* console.log(sort)
    console.log(searchTerm) */
    const endpoint ="https://www.reddit.com/search.json?q=" + searchTerm/*  + "&" + sort */;
    /* console.log(endpoint); */
    const result = await fetch(endpoint);
    const json = await result.json();
    return json;
  }
);

export const FetchSubredditPosts = createAsyncThunk(
  "posts/setSubredditPosts",
  async (subreddit, sort) => {
    const endpoint = "https://www.reddit.com/r/" + subreddit + ".json?&" + sort;
    const result = await fetch(endpoint);
    const json = await result.json();
    return json;
  }
);

/* const sortPosts = (item) => {
    const result = {
        title: item.title,
        user: item.user,
        subreddit: item.subreddit,
        text: item.text,
        image: item.image,
        id: item.id
    }
    return result
} */

// T-62 hook up thunk

const options = {
  name: "postList",
  initialState: {
    posts: {
      data: {
        children: {},
      },
    },
    isLoading: false,
    hasError: false,
    isLoaded: false,
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchHomePosts.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
      state.isLoaded = false;
    });
    builder.addCase(FetchHomePosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.isLoaded = true;
      state.posts = action.payload;
    });
    builder.addCase(FetchHomePosts.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.error = action.payload;
      state.isLoaded = false;
    });
    builder.addCase(FetchSearchPosts.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(FetchSearchPosts.fulfilled, (state, setPosts) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(FetchSearchPosts.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
    builder.addCase(FetchSubredditPosts.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(FetchSubredditPosts.fulfilled, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
      state.posts = action.payload;
    });
    builder.addCase(FetchSubredditPosts.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
};

const postList = createSlice(options);

export const selectPosts = (state) => state.posts;

export default postList.reducer;
