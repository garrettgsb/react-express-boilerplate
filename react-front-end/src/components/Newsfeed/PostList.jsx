import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import SinglePost from './single-post/SinglePost';

export default function PostList({ posts, users }) {
  const renderPosts = posts
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .map((post) => {
      return (
        <SinglePost
          key={post.id}
          id={post.id}
          user_id={post.user_id}
          title={post.title}
          photo={post.photo}
          description={post.description}
          topic={post.topic}
          number_of_likes={post.number_of_likes}
          created_at={post.created_at}
          comment_user_id={post.comment_user_id}
          comment_text={post.comment_text}
          commented_at={post.commented_at}
          users={users}
          posts={posts}
        />
      );
    });

  return <Container> {renderPosts} </Container>;
}
