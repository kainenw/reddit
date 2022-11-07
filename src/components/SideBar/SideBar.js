import React from "react";
import { useSelector } from "react-redux";
import { selectSideBar } from "./SideBarSlice";

//switch between list and specific subreddit sidebar



export const SideBar = () => {

    let sideBar = useSelector(selectSideBar)
    console.log(sideBar)
    if (sideBar.posts) {
        sideBar = sideBar.data.children
    }

    const process = (item) => {
        let subreddit = item.data.subreddit;
        return <h4 key={subreddit}>{subreddit}</h4>
    }
    return (
        <div>
            <h3 className='sub'>subreddits</h3>
            {sideBar.data && sideBar.map(process)}
        </div>)
}

export default SideBar