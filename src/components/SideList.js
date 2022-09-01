import React from "react";

export const SideList = (props) => {
    return (
    <div>
        <h3 class='sub'>subreddits</h3>
        {props.data.map((datum) => {
            let subreddit = datum.subreddit;
            return <h4 key={subreddit}>{subreddit}</h4>
        })}
    </div>)
}