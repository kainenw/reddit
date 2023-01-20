import { configureStore } from "@reduxjs/toolkit";
import searchBar from "../components/container/SearchBar/SearchBarSlice.js";
import postList from "../components/container/PostList/PostListSlice.js";
import sideBar from "../components/container/SideBar/SideBarSlice.js";

const reducers = {
  reducer: {
    searchBar: searchBar,
    postList: postList,
    sideBar: sideBar,
  },
};

const store = configureStore(reducers);

export const selectStore = (state) => store;

export default store;
