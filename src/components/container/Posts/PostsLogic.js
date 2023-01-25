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
    let media;
    let image = item.data.url_overridden_by_dest;
    let hasImage;
    if (image) {
      hasImage = item.data.url_overridden_by_dest.includes(".jpg");
    }
    const hasVideo = item.media !== undefined;
    if (hasImage) {
      media = image;
    }
    if (item.is_Video) {
      media = item.data.media.reddit_video.fallback_url;
      console.log(media);
    }
    const subreddit = item.data.subreddit_name_prefixed;

    return (
      <Post
        post={item.data}
        media={media}
        hasImage={hasImage}
        hasVideo={hasVideo}
        subreddit={subreddit}
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
