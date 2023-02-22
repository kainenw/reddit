import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSubredditPosts } from "../Posts/PostsSlice";
import { FetchSearchSideBar, FetchSubredditSideBar } from "../SideBar/SideBarSlice";
import { FetchHomeSideBar } from "../SideBar/SideBarSlice";
import PostsLogic from "../Posts/PostsLogic";
import SideBarLogic from "../SideBar/SideBarLogic";
import { useParams } from "react-router-dom";

const SubredditPage = () => {
  const sort = useSelector((state) => state.NavBar.sort);

  const { subreddit } = useParams();

  //add current subreddit to fetchsidebar
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchSubredditPosts(subreddit + ".json?&" + sort));
    dispatch(FetchSearchSideBar(subreddit));
  }, [subreddit, sort, dispatch]);

  return (
    <main>
      <h4>{"r/" + subreddit}</h4>
      <PostsLogic page="subreddit" />
      <SideBarLogic page="subreddit" />
    </main>
  );
};

export default SubredditPage;