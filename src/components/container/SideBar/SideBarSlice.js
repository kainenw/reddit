import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// T-64 fix thunk functionality

export const FetchHomeSideBar = createAsyncThunk(
  "search/setHomeSideBar",
  async (sort) => {
    const endpoint = "https://www.reddit.com/" + sort + ".json?";
    const result = await fetch(endpoint);
    const json = await result.json();
    return json;
  }
);

export const FetchSearchSideBar = createAsyncThunk(
  "search/setSearchSideBar",
  async (searchTerm, sort) => {
    const endpoint = "https://www.reddit.com/search/" + searchTerm + ".json?";
    const result = await fetch(endpoint);
    const json = await result.json();
    return json;
  }
);

export const FetchSubredditSideBar = createAsyncThunk(
  "post/setSubredditSideBar",
  async (subreddit, sort) => {
    const endpoint =
      "https://www.reddit.com" + subreddit + "/about.json?" + sort;
    const result = await fetch(endpoint);
    const json = await result.json();
    return json;
  }
);

// T-63 hook up thunks

export const popularSubreddits = [
  "r/pics",
  "r/wallstreetbets",
  "r/news",
  "r/movies",
  "r/wallstreetbets",
  "r/funny",
  "r/memes",
  "r/funny",
  "r/wallstreetbets",
  "r/videos",
  "r/aww",
  "r/pics",
  "r/memes",
  "r/gaming",
  "r/gifs",
  "r/funny",
  "r/PublicFreakout",
  "r/pics",
  "r/pics",
  "r/aww",
  "r/wallstreetbets",
  "r/pics",
  "r/news",
  "r/memes",
  "r/pics",
];

/* const techSubreddits = {data: { children: ["/r/Technology", "/r/AskTechnology", "/r/Futurology", "/r/KeepOurNetFree ", "/r/pirateparty ", "/r/privacy", "/r/Gadgets", "/r/Hardware", "/r/Tech", "/r/Technews", "/r/Realtech", "/r/InternetIsBeautiful ", "/r/RenewableEnergy", "/r/SelfDrivingCars", "/r/TechSupport", "/r/TalesFromTechSupport", "/r/TechSupportGore", "/r/TechnologyPorn", "/r/ImaginaryTechnology", "/r/Programming", "/r/Learnprogramming", "/r/CScareerquestions", "/r/CompSci", "/r/NetSec", "/r/Engineering", "/r/Hacking", "/r/Software"]}} */

const option = {
  name: "sideBar",
  initialState: {
    list: popularSubreddits,
    isLoading: false,
    hasError: false,
    error: {},
    isLoaded: false,
  },
  reducers: {
    setHomeSideBar: (state) => {
      state.list = popularSubreddits;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchHomeSideBar.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        state.isLoaded = false;
      })
      .addCase(FetchHomeSideBar.fulfilled, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
        state.raw = action.payload;
        state.isLoaded = true;
      })
      .addCase(FetchHomeSideBar.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.isLoaded = false;
        state.error = action.payload;
      })
      .addCase(FetchSearchSideBar.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        state.isLoaded = false;
      })
      .addCase(FetchSearchSideBar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.raw = action.payload;
        state.isLoaded = true;
      })
      .addCase(FetchSearchSideBar.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.isLoaded = false;
      })
      .addCase(FetchSubredditSideBar.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        state.isLoaded = false;
      })
      .addCase(FetchSubredditSideBar.fulfilled, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
        state.isLoaded = true;
        state.raw = action.payload;
      })
      .addCase(FetchSubredditSideBar.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.isLoaded = false;
      });
  },
};

const sideBar = createSlice(option);

export const selectSideBar = (state) => state.list;

export const { setHomeSideBar } = sideBar.actions;

export default sideBar.reducer;