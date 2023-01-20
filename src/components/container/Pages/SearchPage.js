import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSearchPosts } from "../PostList/PostListSlice";
//import { FetchSearchSideBar } from "../SideBar/SideBarSlice";
import PostListLogic from "../PostList/PostListLogic";
import SideBarLogic from "../SideBar/SideBarLogic";

const SearchPage = () => {
  const sort = useSelector((state) => state.searchBar.sort);
  const searchTerm = useSelector((state) => state.searchBar.searchTerm);
  const dispatch = useDispatch();
  console.log(searchTerm);
  console.log(sort);
  useEffect(() => {
    dispatch(FetchSearchPosts(searchTerm/* , sort */));
    //dispatch(FetchSearchSideBar);
  }, [dispatch, searchTerm, sort])

  /* console.log("searchTerm: " + searchTerm + "sort:" + sort) */

  return (
    <main>
      <SideBarLogic page="search" />
      <PostListLogic page="search" />
    </main>
  );
};

export default SearchPage;
