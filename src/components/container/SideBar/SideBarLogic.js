import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//switch between list and specific subreddit sidebar

export const SideBarLogic = (props) => {
  const sideBar = useSelector((state) => state.sideBar.list);

  const callback = (item, i) => {
    /* if (sideBar.data.children) {
      const processed = sideBar.data.children
    } */
    return (
      <div>
        <Link
          to={"../" + item}
          key={i}
          replace={true}
          className="sidebar-subreddit"
        >
          {item}
        </Link>
      </div>
    );
  };

  return (
    <div id="sidebar" className="column">
      <h4>Popular Subreddits</h4>
      {sideBar ? sideBar.map(callback) : <h1> LOADING</h1>}
    </div>
  );
};

export default SideBarLogic;
