import React from "react";
import { useLocation } from "react-router-dom";

//switch between list and specific subreddit sidebar



export const SideBar = (props) => {
    const { path, url } = useLocation();
    
    return (
    <div>
        <h3 class='sub'>subreddits</h3>
        {props.data.map((datum) => {
            let subreddit = datum.subreddit;
            return <h4 key={subreddit}>{subreddit}</h4>
        })}
    </div>)
}

export default SideBar;