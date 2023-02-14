import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchSearchPosts } from "../Posts/PostsSlice";
//import { FetchSearchSideBar } from "../SideBar/SideBarSlice";
import PostsLogic from "../Posts/PostsLogic";
import SideBarLogic from "../SideBar/SideBarLogic";
import { FetchSearchSideBar } from "../SideBar/SideBarSlice";

const SearchPage = () => {
  const sort = useSelector((state) => state.NavBar.sort);
  const searchTerm = useSelector((state) => state.NavBar.searchTerm);
  console.log(sort);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchSearchPosts(searchTerm + "&" + sort));
    dispatch(FetchSearchSideBar(searchTerm));
  }, [dispatch, searchTerm, sort]);

  return (
    <main>
      <h4>Showing results for: {searchTerm}</h4>
      <SideBarLogic page="search" />
      <PostsLogic page="search" />
    </main>
  );
};

export default SearchPage;
