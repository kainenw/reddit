import React from "react"
import SideBar from "./SideBar";
import { FetchHomeSideBar, FetchSearchSideBar, FetchSubredditSideBar } from "./SideBarSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const FetchSideBar = () => {
    const { path } = useLocation()

    const dispatch = useDispatch()
    
    path === '/subreddit/:subreddit' && dispatch(FetchSubredditSideBar)
    path === '/search/:searchTerm' && dispatch(FetchSearchSideBar)
    path === '/' && dispatch(FetchHomeSideBar)

    return <SideBar />
}

export default FetchSideBar;
