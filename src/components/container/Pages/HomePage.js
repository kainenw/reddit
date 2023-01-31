import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchHomePosts } from "../Posts/PostsSlice";
import { FetchHomeSideBar } from "../SideBar/SideBarSlice";
import PostsLogic from "../Posts/PostsLogic";
import SideBarLogic from "../SideBar/SideBarLogic";

const HomePage = () => {
  const sort = useSelector((state) => state.searchBar.sort);
  const searchTerm = useSelector((state) => state.searchBar.searchTerm);

  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchHomePosts(sort));
    dispatch(FetchHomeSideBar(searchTerm, sort));
  }, [searchTerm, sort, dispatch]);

  return (
    <main>
      <h4>{sort} posts</h4>
      <PostsLogic page="home" />
      <SideBarLogic page="home" />
    </main>
  );
};

export default HomePage;
