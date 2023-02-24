import React from "react";
import ExpandedPostLogic from "../Posts/ExpandedPostLogic";
import { useSelector } from "react-redux";

const PostPage = () => {
  const post = useSelector((state) => state.posts.expanded);
  const comments = useSelector((state) => state.posts.expanded.comments[1]);
  
  /* const sort = useSelector((state) => state.NavBar.sort);
  const expanded = useSelector((state) => state.posts.expanded) */

/*   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchComments(expanded.subreddit + "/" + expanded.id));
  }, [sort, expanded]); */

  // FetchComments to be made

  return (
    <main id="expanded">
      <ExpandedPostLogic post={post} comments={comments} />
    </main>
  );
};

export default PostPage;
