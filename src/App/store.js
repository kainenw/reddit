import { configureStore } from "@reduxjs/toolkit";
import searchBar from "../components/container/SearchBar/SearchBarSlice.js";
import posts from "../components/container/Posts/PostsSlice.js";
import sideBar from "../components/container/SideBar/SideBarSlice.js";

const reducers = {
  reducer: {
    searchBar: searchBar,
    posts: posts,
    sideBar: sideBar,
  },
};

const store = configureStore(reducers);

export const selectStore = (state) => store;

export default store;
