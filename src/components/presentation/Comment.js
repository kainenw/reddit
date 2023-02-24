import React from "react";

const Comment = (props) => {
  const comment = props.comment;
  return (
    <div className="unexpanded presentation">
      <div id="title-bar">
        <p id="user">{"u/" + comment.user}</p>
      </div>
      <p id="text">{comment.content}</p>
      <div id="stats-bar">
        <p id="score">score {comment.score}</p>
      </div>
    </div>
  );
};

export default Comment;
