import React from "react";
import { /* useDispatch,  */ useSelector } from "react-redux";
import /* useLocation */ "react-router-dom";
import { selectSideBar } from "../container/SideBar/SideBarSlice.js";

const SideBar = () => {
  const sideBar = useSelector(selectSideBar);

  const process = (item) => {
    let subreddit = item;
    return <h4 className="item" key={subreddit}>{subreddit}</h4>;
  };

  // add loading functionality
  return (
    <div>
      <h3 className="subreddits">subreddits</h3>
      {sideBar && sideBar.map(process)}
    </div>
  );
};

export default SideBar;
