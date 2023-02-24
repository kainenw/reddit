import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../presentation/Post";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FetchComments, setPrimaryData } from "./PostsSlice";

const postsLogic = (props) => {
  // filter posts in the selector method
  const posts = useSelector((state) => state.posts.posts.data.children);
  const isLoaded = useSelector((state) => state.posts.isLoaded);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  //for testing
  //let rawData = posts.raw
  //let posts = postobjects(rawData)

  // bottom of list put a button that takes you to top OR takes you to the next page of results
  var handleClick = () => {
    window.scroll(0, 0);
  };

  const handlePostClick = (post) => {
    console.log(post);
    const id = post.id;
    dispatch(setPrimaryData(post));
    dispatch(FetchComments(id));
    navigate("/post/" + id);
  };

  /*   const doc = document.body
  const PostObjects = doc.getElementById("unexpanded")
  console.log(PostObjects)
 */
  
  const callback = (item, i) => {
    // make all these one object
    const data = item.data;
    let post = {
      data: data,
      image: data.url_overridden_by_dest,
      hasImage: null,
      image: data.url_overridden_by_dest,
      hasImage: null,
      media: null,
      hasVideo: data.is_video,
      hasLink: data.post_hint == "link",
      link: null,
      subreddit: data.subreddit_name_prefixed,
      commentsNum: data.num_comments,
      score: data.score,
      id: data.id,
      author: data.author,
      title: data.title,
      selftext: data.selftext,
    };
    if (post.image) {
      post.hasImage =
        post.image.includes(".jpg") || post.image.includes(".png");
      post.media = post.image;
    }else if (post.hasVideo) {
      post.media = data.media.reddit_video.fallback_url;
    }
    if (post.hasLink) {
      post.link = data.url;
    }

    return <Post post={post} handlePostClick={handlePostClick} key={i} />;
  };
  console.log(posts)
  return (
    <div id="posts" className="column">
      {isLoaded ? posts.map(callback) : <div class="loader"></div>}
      <button onClick={handleClick}>return to top</button>
    </div>
  );
};

export default postsLogic;
