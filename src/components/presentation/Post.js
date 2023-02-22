import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const post = props.post;
  return (
    <div className="post" onClick={props.handlePostClick}>
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
          <video id="video" width="100%" height="auto" controls>
            <source src={props.media} type="video/mp4" />
          </video>
        )}
        {props.hasLink && <a href={post.url}>{post.domain}</a> }
        {post.selftext && <p id="text">{post.selftext}</p>}
      </div>
      <div id="stats-bar">
        <p id="upvotes" >&lt;3 {props.upvotes}</p>
        <p id="commentsNum" >Comments: {props.commentsNum}</p>
      </div>
    </div>
  );
};

export default Post;
