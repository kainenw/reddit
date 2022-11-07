import React, { /*useState, useEvent*/ } from "react";
import { useSelector } from "react-redux";
import { selectPostList } from "./PostListSlice";

const PostList = () => {
    
    let posts = useSelector(selectPostList);
    if ( posts.posts ) {
        posts = posts.data.children
    }

    const renderPost = (item) => {
        let post = item.data
        return (
            <div className="post">
                <h3>title: {post.title}</h3>
                <h6>{post.user}</h6>
                <h6>{post.subreddit}</h6>
                <p>text: {post.text}</p>
            </div>
        )}
    return (
        <div id="posts" >
            {posts.posts && posts.map(renderPost)}
        </div>
    );
}

export default PostList;