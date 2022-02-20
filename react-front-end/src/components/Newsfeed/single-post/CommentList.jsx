import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import SingleComment from './SingleComment';
import { Segment, Image, Feed } from 'semantic-ui-react';

export default function CommentList({ users, posts }) {

  

  const renderComments = posts
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .map((post) => {
      return (
        <SingleComment
          key={post.id}
          user_id={post.comment_user_id}
          comment_user_id={post.commented_user_id}
          comment_text={post.comment_text}
          commented_at={post.commented_at}
          users={users}
        />
      );
    });

  return <Segment style={{ overflow: 'auto', maxHeight: '20em' }}> {renderComments} </Segment>;
}
