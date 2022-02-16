import React from "react";
import "semantic-ui-css/semantic.min.css"
import PostList from "./PostList";



export default function Newsfeed({ name, posts }) {
  
  return (
    <main className="ui container">
      <div>
        <h2>
          Hey {name}, what's on your mind?
        </h2>
        <div className="ui animated fade button orange">
          <div className="visible content">
            Create
          </div>
          <div className="hidden content">
            New Post
          </div>
        </div>
      <div className='feed'>
       <PostList posts={posts}/>
      </div>
    </div>
    </main>
  );
};