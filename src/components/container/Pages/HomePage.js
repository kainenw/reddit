import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchHomePosts } from "../PostList/PostListSlice";
import { FetchHomeSideBar } from "../SideBar/SideBarSlice";
import PostListLogic from "../PostList/PostListLogic";
import SideBarLogic from "../SideBar/SideBarLogic";

const HomePage = () => {
  const sort = useSelector((state) => state.searchBar.sort);
  const searchTerm = useSelector((state) => state.searchBar.searchTerm);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchHomePosts(sort));
    dispatch(FetchHomeSideBar(searchTerm, sort));
  }, [searchTerm, sort, dispatch]);

  return (
    <main>
      <PostListLogic page="home" />
      <SideBarLogic page="home" />
    </main>
  );
};

export default HomePage;
