import React from "react";

const Post = (props) => {
  const post = props.post;
  return (
    <div className="post">
      <div id="title-bar">
        <h3 id="title">{post.title}</h3>
        <div id="user&subreddit"></div>
        <p id="user">{"u/" + post.author}</p>
        <p id="subreddit">{"r/" + post.subreddit}</p>
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
        {post.text && <p id="text">{post.text}</p>}
      </div>
    </div>
  );
};

export default Post;
