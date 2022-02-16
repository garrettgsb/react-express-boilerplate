import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Icon, Image, Segment, Feed } from "semantic-ui-react";

export default function SinglePost({id, user_id, title, photo, description, topic, created_at}) {
  return (
    
       <Segment raised>
         <h2 left>{title}</h2>
         <div>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
            <span>posted by Chikorita</span>
          </div>
         <Segment.Group horizontal>
          <Image src={photo} width='50%' height='100%' rounded/>
          <h5>{description}</h5> 
         </Segment.Group>
        
        <Segment.Group horizontal>
          <Segment><div class="ui labeled button" tabindex="0">
            <div class="ui button">
              <i class="heart icon"></i> Like
            </div>
            <a class="ui basic label">
              2,048
            </a>
          </div></Segment>
          <Segment><div class="ui labeled button" tabindex="0">
            <div class="ui button">
              <i class="plus icon"></i>
            </div>
              <a class="ui basic label">
                Follow
              </a>
            </div></Segment>
          <Segment>
          <div class="ui labeled button" tabindex="0">
            <div class="ui button">
              <i class="envelope icon"></i>
            </div>
              <a class="ui basic right pointing label">
                Message
              </a>
            </div>
          </Segment>
        </Segment.Group>
    
       </Segment>

       
    
       
  )
}