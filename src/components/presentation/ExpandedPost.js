import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ExpandedPost = (props) => {
  const post = props.post.primaryData;

  return (
    <div className="post expanded presentation">
      <div id="title-bar">
        <h3 id="title">{post.title}</h3>
        <p id="user">{"u/" + post.author}</p>
        <Link id="subreddit" to={"../" + post.subreddit} replace={true}>
          {post.subreddit}
        </Link>
      </div>
      <div id="post-body">
        {post.hasImage && <img src={post.media} alt={post.title} id="image" />}
        {post.hasVideo && (
          <video id="video" width="100%" height="auto" controls>
            <source src={post.media} type="video/mp4" />
          </video>
        )}
        {post.hasLink && <a href={post.url}>{post.domain}</a>}
        {post.selftext && <p id="text">{post.selftext}</p>}
      </div>
      <div id="stats-bar">
        <p id="score">score {post.score}</p>
        <p id="commentsNum">Comments: {post.commentsNum}</p>
      </div>
    </div>
  );
};

export default ExpandedPost;
