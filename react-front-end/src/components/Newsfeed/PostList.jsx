import React from "react";
import "semantic-ui-css/semantic.min.css"
//import { Feed } from 'semantic-ui-react'
import SinglePost from "./SinglePost";

export default function PostList(posts) {
  const renderPosts = posts.map(post => 
      <SinglePost
        id={post.id}
        user_id={post.user_id}
        title={post.title}
        photo={post.photo}
        description={post.description}
        topic={post.topic}
        created_at={post.created_at}
      />
  );
  return <div className='container'> {renderPosts} </div>
};