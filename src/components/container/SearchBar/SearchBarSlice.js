import { createSlice } from "@reduxjs/toolkit";

const option = {
  name: "searchBar",
  initialState: {
    searchTerm: "",
    sort: "top",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSubreddit: (state, action) => {
      state.subreddit = action.payload;
    },
  },
};

const searchBar = createSlice(option);

export const selectSearchTerm = (state) => state.searchTerm;
export const selectSort = (state) => state.sort;

export const { setSearchTerm, setSort } = searchBar.actions;

export default searchBar.reducer;
