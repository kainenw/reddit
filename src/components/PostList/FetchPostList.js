import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectSort } from "../NavBar/NavBarSlice";
import PostList from "./PostList";
import { FetchHomePosts, FetchSearchPosts, FetchSubredditPosts } from "./PostListSlice";


const FetchPostList = () => {
    const [ path ] = useLocation()

    const dispatch = useDispatch()

    const sort = useSelector(selectSort())
    
    if ( path === '/subreddit/:subreddit' ) {
        dispatch(FetchSubredditPosts(sort))
    } else if ( path === '/search/:searchTerm' ) {
        dispatch(FetchSearchPosts(sort))
    } else if (path === '') {
        dispatch(FetchHomePosts(sort))
    }

    return <PostList />

}

export default FetchPostList;