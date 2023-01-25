import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSubredditPosts } from "../Posts/PostsSlice";
import { FetchSubredditSideBar } from "../SideBar/SideBarSlice";
import { FetchHomeSideBar } from "../SideBar/SideBarSlice";
import PostsLogic from "../Posts/PostsLogic";
import SideBarLogic from "../SideBar/SideBarLogic";
import { useParams } from "react-router-dom";

const SubredditPage = () => {
  const sort = useSelector((state) => state.searchBar.sort);
  const searchTerm = useSelector((state) => state.searchBar.searchTerm);

  const { subreddit } = useParams();
  console.log(subreddit);

  //add current subreddit to fetchsidebar
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchSubredditPosts("r/" + subreddit /* , sort */));
    dispatch(FetchHomeSideBar(sort));
    /* dispatch(FetchSubredditSideBar("r/motivation", sort)); */
  }, [subreddit, sort, dispatch]);

  return (
    <main>
      <h4>r/{subreddit}</h4>
      <PostsLogic page="subreddit" />
      <SideBarLogic page="subreddit" />
    </main>
  );
};

export default SubredditPage;
