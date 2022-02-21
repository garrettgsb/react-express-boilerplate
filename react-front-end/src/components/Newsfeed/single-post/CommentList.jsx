import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import SingleComment from "./SingleComment";
import { Segment } from "semantic-ui-react";

export default function CommentList({ users, comments, post_id }) {
  const commentsFilteredByPostId = comments.filter((comment) => comment.post_id === post_id);

  const renderComments = commentsFilteredByPostId.map((comment) => {
    return (
      <SingleComment
        key={comment.id}
        comment_user_id={comment.comment_user_id}
        comment_text={comment.comment_text}
        commented_at={comment.commented_at}
        users={users}
      />
    );
  });

  return <Segment style={{ overflow: "auto", maxHeight: "20em" }}> {renderComments} </Segment>;
}
