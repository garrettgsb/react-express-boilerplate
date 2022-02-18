import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Image, Segment } from "semantic-ui-react";
import {getUserById} from "../../helpers/selectors";

export default function SinglePost({id, user_id, title, photo, description, topic, created_at, users}) {
  const user = getUserById(users, user_id)
  return (
    
       <Segment raised>
         <h2>{title} ({topic})</h2>
         <div>
            /*<Image src={user.avatar} avatar />
            <span>posted by {user.name} on {created_at}</span>*/
          </div>
         <Segment.Group horizontal>
          <Image src={photo} width='50%' height='100%' rounded/>
          <h5>{description}</h5> 
         </Segment.Group>
        
        <Segment.Group horizontal>
          <Segment><div className="ui labeled button" tabIndex="0">
            <div className="ui button">
              <i className="heart icon"></i> Like
            </div>
            <a className="ui basic label">
              2,048
            </a>
          </div></Segment>
          <Segment><div className="ui labeled button" tabIndex="0">
            <div className="ui button">
              <i className="plus icon"></i>
            </div>
              <a className="ui basic label">
                Follow
              </a>
            </div></Segment>
          <Segment>
          <div className="ui labeled button" tabIndex="0">
            <div className="ui button">
              <i className="envelope icon"></i>
            </div>
              <a className="ui basic right pointing label">
                Message
              </a>
            </div>
          </Segment>
        </Segment.Group>
    
       </Segment>

       
    
       
  )
}