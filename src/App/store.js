import { configureStore } from "@reduxjs/toolkit"
import navBar from "../components/NavBar/NavBarSlice.js"
import postList from "../components/PostList/PostListSlice.js"
import sideBar from "../components/SideBar/SideBarSlice.js"

const reducers = {
    reducer: {
        navBar: navBar,
        postList: postList,
        sideBar: sideBar
    }
}

const store = configureStore(reducers)

console.log(store)

export default store