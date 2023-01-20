import React from "react";
import { useSelector } from "react-redux";

//switch between list and specific subreddit sidebar

export const SideBarLogic = (props) => {
  const sideBar = useSelector((state) => state.sideBar.list);

  const callback = (item, i) => {
    /* if (sideBar.data.children) {
      const processed = sideBar.data.children
    } */
    return <p key={i}>{item} </p>;
  };

  return (
    <div id="sidebar" className="column">
      {sideBar ? sideBar.map(callback) : <h1> LOADING</h1>}
    </div>
  );
};

export default SideBarLogic;
