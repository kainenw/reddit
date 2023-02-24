import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchHomePosts } from "../Posts/PostsSlice";
import { FetchHomeSideBar } from "../SideBar/SideBarSlice";
import PostsLogic from "../Posts/PostsLogic";
import SideBarLogic from "../SideBar/SideBarLogic";

const HomePage = () => {
  const sort = useSelector((state) => state.NavBar.sort);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchHomePosts(sort));
    dispatch(FetchHomeSideBar());
  }, [sort, dispatch]);

  return (
    <main id="unexpanded">
      <h4 id="title">{sort} posts</h4>
      <PostsLogic page="home" />
      <SideBarLogic page="home" />
    </main>
  );
};

export default HomePage;
