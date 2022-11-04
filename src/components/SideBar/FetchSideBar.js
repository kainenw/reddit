import React from "react"
import SideBar from "./SideBar";
import { FetchHomeSideBar, FetchSearchSideBar, FetchSubredditSideBar } from "./SideBarSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const FetchSideBar = () => {
    const [ path ] = useLocation()

    const dispatch = useDispatch()
    
    if ( path === '/subreddit/:subreddit' ) {
        dispatch(FetchSubredditSideBar)
    } else if ( path === '/search/:searchTerm' ) {
        // create fetch function
        dispatch(FetchSearchSideBar)
    } else if (path === '/') {
        dispatch(FetchHomeSideBar)
    }

    return <SideBar />
}

export default FetchSideBar;
