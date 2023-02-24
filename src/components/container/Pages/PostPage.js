import React, { useEffect, useSyncExternalStore } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpandedPostLogic from "../Posts/ExpandedPostLogic";

const PostPage = () => {
  const sort = useSelector((state) => state.NavBar.sort);
  const expanded = useSelector((state) => state.posts.expanded)

/*   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchComments(expanded.subreddit + "/" + expanded.id));
  }, [sort, expanded]); */

  // FetchComments to be made

  return (
    <main id="expanded">
      <ExpandedPostLogic />
    </main>
  );
};

export default PostPage;
