import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSearchPosts } from "../Posts/PostsSlice";
//import { FetchSearchSideBar } from "../SideBar/SideBarSlice";
import PostsLogic from "../Posts/PostsLogic";
import SideBarLogic from "../SideBar/SideBarLogic";

const SearchPage = () => {
  const sort = useSelector((state) => state.searchBar.sort);
  const searchTerm = useSelector((state) => state.searchBar.searchTerm);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchSearchPosts(sort));
    dispatch(FetchSearchPosts(searchTerm /* , sort */));
  }, [dispatch, searchTerm /* , sort */]);

  return (
    <main>
      <h4>Showing results for: {searchTerm}</h4>
      <SideBarLogic page="search" />
      <PostsLogic page="search" />
    </main>
  );
};

export default SearchPage;
