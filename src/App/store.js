import { configureStore } from "@reduxjs/toolkit"
import postList from "../components/PostList/PostListSlice"
import sideBar from "../components/SideBar/SideBarSlice"

const reducers = {
    reducers: {
        postList: postList,
        sideBar: sideBar
    }
}


export const store = configureStore(reducers)