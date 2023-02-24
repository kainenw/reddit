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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchSearchPosts(searchTerm + "&" + sort));
    dispatch(FetchSearchSideBar(searchTerm));
  }, [dispatch, searchTerm, sort]);

  return (
    <main id="unexpanded">
      <h4 id="title">Showing results for: {searchTerm}</h4>
      <SideBarLogic page="search" />
      <PostsLogic page="search" />
    </main>
  );
};

export default SearchPage;
