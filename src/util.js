const postObj = (post) => {
  const media = post.data.url_overridden_by_dest;
  const hasImage = media.includes(".jpg");
  const obj = {
    title: post.data.title,
    subreddit: post.data.subreddit,
    user: post.data.author_fullname,
    text: post.data.selftext,
    hasImage: hasImage,
    media: media,
    /* link: null */
  };
  return obj;
};

const postobjects = (list) => {
  let posts = [];
  const push = (item) => {
    const post = postObj(item);
    posts.push(post);
  };
  list.map((item) => push(item));
  return posts;
};

module.exports = postObj;
module.exports = postobjects;
``