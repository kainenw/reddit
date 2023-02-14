import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//switch between list and specific subreddit sidebar

export const SideBarLogic = (props) => {
  let list = useSelector((state) => state.sideBar.list);
  let raw = useSelector((state) => state.sideBar.raw);

  console.log(raw)
  useEffect(() => {
    if (raw !== null & raw !== {}) {
      list =[]
      raw.data.children.map((item) =>
        list.push(item.data.subreddit_name_prefixed)
      );
    } 
  }, [raw]);
  
  const callback = (item, i) => {
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
      {list ? list.map(callback) : <h1> LOADING</h1>}
    </div>
  );
};

export default SideBarLogic;
