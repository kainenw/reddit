import { configureStore } from "@reduxjs/toolkit";
import NavBar from "../components/container/NavBar/NavBarSlice.js";
import posts from "../components/container/Posts/PostsSlice.js";
import sideBar from "../components/container/SideBar/SideBarSlice.js";

const reducers = {
  reducer: {
    NavBar: NavBar,
    posts: posts,
    sideBar: sideBar,
  },
};

const store = configureStore(reducers);

export const selectStore = (state) => store;

export default store;
