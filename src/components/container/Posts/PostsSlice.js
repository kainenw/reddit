import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// T-66 build refine thunk

// T-65 fix thunk functionality

// DONE!! GOAL: fix fetch behavior for home posts

export const FetchHomePosts = createAsyncThunk(
  "posts/FetchHomePosts",
  async (sort) => {
    console.log(sort);
    const endpoint = "https://www.reddit.com/" + sort + ".json?";
    console.log(endpoint);
    const result = await fetch(endpoint);
    const json = await result.json();
    return json;
  }
);

export const FetchSearchPosts = createAsyncThunk(
  "posts/FetchSearchPosts",
  async (params) => {
    const endpoint = "https://www.reddit.com/search.json?q=" + params;
    console.log(endpoint);
    const result = await fetch(endpoint);
    const json = await result.json();
    return json;
  }
);

export const FetchSubredditPosts = createAsyncThunk(
  "posts/setSubredditPosts",
  async (params) => {
    const endpoint =
      "https://www.reddit.com/r/" + params 
    console.log(endpoint);
    const result = await fetch(endpoint);
    const json = await result.json();
    return json;
  }
);

export const FetchComments = createAsyncThunk(
  "posts/FetchComments",
  async (params) => {
    const endpoint = "https://www.reddit.com/" + params + ".json?top"; 
    const result = await fetch(endpoint)
    const json = await result.json()
    return json
  }
)

const options = {
  name: "posts",
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
    expanded: {
      primaryData: {},
      comments: {}
    }
  },
  reducers: {
    setPrimaryData: (state, action) => {
      state.expanded.primaryData = action.payload
    }
  },
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
    builder.addCase(FetchSearchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.isLoaded = true;
      state.posts = action.payload;
    });
    builder.addCase(FetchSearchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.error = action.payload;
      state.isLoaded = false;
    });
    builder.addCase(FetchSubredditPosts.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(FetchSubredditPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.isLoaded = true;
      state.posts = action.payload;
    });
    builder.addCase(FetchSubredditPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.error = action.payload;
      state.isLoaded = false;
    });
    builder.addCase(FetchComments.pending, (state) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(FetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.isLoaded = true;
      state.expanded.comments = action.payload;
    });
    builder.addCase(FetchComments.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
      state.error = action.payload;
      state.isLoaded = false;
    });
  }
};

const posts = createSlice(options);

export const selectPosts = (state) => state.posts;

export const {setPrimaryData} = posts.actions

export default posts.reducer;
