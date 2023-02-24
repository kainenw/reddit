import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//switch between list and specific subreddit sidebar

export const SideBarLogic = (props) => {
  let list = useSelector((state) => state.sideBar.list);
  console.log(list)
  
  const callback = (item, i) => {
    if (props.page === "subreddit" && i === 0) {
      return;
    }
    const subreddit = item.data.display_name_prefixed;
    console.log(subreddit)
    return (
      <div>
        <Link
          to={"../" + subreddit}
          key={i}
          replace={true}
          className="sidebar-subreddit"
        >
          {subreddit}
        </Link>
      </div>
    );
  };

  return (
    <div id="sidebar-container" className="column">
      <div id="sidebar" className="presentation">
        {props.page === "home" ? (
          <h4>Popular Subreddits</h4>
        ) : (
          <h4>Related Subreddits</h4>
        )}
        {list ? list.data.children.map(callback) : <div class="loader"></div>}
      </div>
    </div>
  );
};

export default SideBarLogic;
