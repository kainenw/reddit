import { createSlice } from "@reduxjs/toolkit";

const option = {
  name: "NavBar",
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

const NavBar = createSlice(option);

export const selectSearchTerm = (state) => state.searchTerm;
export const selectSort = (state) => state.sort;

export const { setSearchTerm, setSort } = NavBar.actions;

export default NavBar.reducer;
