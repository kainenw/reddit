import React from "react";
import { useSelector } from "react-redux";
import Post from "../../presentation/Post";
import { Link } from "react-router-dom";

const postsLogic = (props) => {
  // filter posts in the selector method
  const posts = useSelector((state) => state.posts.posts.data.children);
  const isLoaded = useSelector((state) => state.posts.isLoaded);

  //for testing
  //let rawData = posts.raw
  //let posts = postobjects(rawData)

  // bottom of list put a button that takes you to top OR takes you to the next page of results
  var handleClick = () => {
    window.scroll(0,0);
  };

  const handlePostClick = (event) => {
    const post = event.target 
    post.style.gridArea = "1/2/2/2"
  }

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
    const commentsNum = data.num_comments
    const upvotes = data.ups


    return (
      <Post
        post={data}
        media={media}
        hasImage={hasImage}
        hasVideo={hasVideo}
        subreddit={subreddit}
        hasLink={hasLink}
        link={link}
        commentsNum={commentsNum}
        upvotes={upvotes}
        handlePostClick={handlePostClick}
        key={i}
      />
    );
  };

  return (
    <div id="posts" className="column">
      {isLoaded ? posts.map(callback) : <div class="loader"></div>}
      <button onClick={handleClick}>return to top</button>
    </div>
  );
};

export default postsLogic;
