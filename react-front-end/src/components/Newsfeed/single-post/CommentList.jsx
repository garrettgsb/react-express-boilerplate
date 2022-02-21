import React from "react";
import "semantic-ui-css/semantic.min.css";
import SingleComment from "./SingleComment";
import { Segment } from "semantic-ui-react";

export default function CommentList({ users, comments, post_id }) {

  const renderComments = comments
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .filter((comment) => comment.post_id === post_id)
    .map((comment) => {
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

  return <Segment style={{ overflow: "auto", maxHeight: "20em" }}>{renderComments}</Segment>;
}
