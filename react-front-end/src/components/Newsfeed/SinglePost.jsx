import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Link } from 'react-router-dom';

export default function SinglePost({id, user_id, title, photo, description, topic, created_at}) {
  return (
     <div className="ui link cards">
        <h4>{title}</h4>
        <img src={photo} alt="post image"/>
        <h5>{description}</h5> 
    </div>
       
  )
}