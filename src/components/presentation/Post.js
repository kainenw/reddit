import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const post = props.post;
  return (
    <div className="post">
      <div id="title-bar">
        <h3 id="title">{post.title}</h3>
        <div id="user-subreddit">
          <p id="user">{"u/" + post.author}</p>
          <Link id="subreddit" to={"../" + props.subreddit} replace={true}>
            {props.subreddit}
          </Link>
        </div>
      </div>
      <div id="post-body">
        {props.hasImage && (
          <img src={props.media} alt={post.title} id="image" />
        )}
        {props.hasVideo && (
          <video id="video">
            <source src={props.media} type="video/mp4" />
          </video>
        )}
        {post.selftext && <p id="text">{post.selftext}</p>}
      </div>
    </div>
  );
};

export default Post;
