import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ExpandedPost from "../../presentation/ExpandedPost";
import Comment from "../../presentation/Comment";

const ExpandedPostLogic = (props) => {
  // filter posts in the selector method
  const post = useSelector((state) => state.posts.expanded);
  const comments = useSelector((state) => state.posts.expanded.comments[1]);

  /* const convertUTC = (utc) => {
    const unixTimestamp = props.post.utc_created;
    const javascriptTimestamp = new Date(unixTimestamp * 1000);
    const year = javascriptTimestamp.getFullYear();
    const month = javascriptTimestamp.getMonth();
    const date = javascriptTimestamp.getDate();
    return `${month}-${date}-${year}`;
  }; */
  
  let length;
  if (comments) {
    length = comments.data.children.length;
  }

  const processComment = (item, i) => {
    if (i && i < length) {
      const data = item.data;
      const obj = {
        user: data.author,
        /* date: item.//date */
        content: data.body,
        score: data.score,
      };
      return <Comment comment={obj} />;
    }
  };

  useEffect(() => {
    //comments[0] contains the original post
    comments && comments.data.children.map(processComment);
  }, [comments]);

  //for testing
  //let rawData = posts.raw
  //let posts = postobjects(rawData)

  // bottom of list put a button that takes you to top OR takes you to the next page of results
  var handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div id="posts" className="column">
      <ExpandedPost post={post}  />
      {comments && comments.data.children.map(processComment)}
      <button onClick={handleClick}>return to top</button>
    </div>
  );
};

export default ExpandedPostLogic;
