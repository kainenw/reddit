
import { React, /*useState, useEvent*/ } from "react";
import { useSelector } from "react-redux";
import { selectPostList } from "./PostListSlice";

//import { ReactRouter as Router, Route} from "react-router-dom"

function PostList () {
    

    const postList = useSelector(selectPostList);

    const renderPost = (item) => {
        return (
            <div className="post">
                <h3>title: {item.title}</h3>
                <h6>{item.user}</h6>
                <h6>{item.subreddit}</h6>
                <p>text: {item.text}</p>
            </div>
        )
    }
    return (
        <div id="postList" >
            {postList.map(renderPost)}
        </div>
    );
}

export default PostList;