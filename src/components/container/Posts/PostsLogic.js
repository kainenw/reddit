import React from "react";
import { useSelector } from "react-redux";
import Post from "../../presentation/Post";
import { Link } from "react-router-dom";

const postsLogic = (props) => {
  // filter posts in the selector method
  const posts = useSelector((state) => state.posts.posts.data.children);
  const isLoaded = useSelector((state) => state.posts.isLoaded);
  /* if (posts) {
    posts = posts.map(postobjects)
    console.log("number of posts:" + posts.length)
  } */

  //for testing
  //let rawData = posts.raw
  //let posts = postobjects(rawData)

  const callback = (item, i) => {
    const data = item.data;
    let media;
    let image = data.url_overridden_by_dest;
    let hasImage;
    let hasVideo = data.is_video;
    let hasLink = data.post_hint == "link";
    let link;
    if (image) {
      hasImage = image.includes(".jpg") || image.includes(".png");
      media = image;
    }
    if (hasVideo) {
      media = data.media.reddit_video.fallback_url;
    }
    if (hasLink) {
      link = data.url;
    }
    const subreddit = data.subreddit_name_prefixed;

    return (
      <Post
        post={data}
        media={media}
        hasImage={hasImage}
        hasVideo={hasVideo}
        subreddit={subreddit}
        hasLink={hasLink}
        link={link}
        key={i}
      />
    );
  };

  return (
    <div id="posts" className="column">
      {isLoaded ? posts.map(callback) : <h3>LOADING</h3>}
    </div>
  );
};

export default postsLogic;
