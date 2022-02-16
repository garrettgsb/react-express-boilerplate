import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Icon, Image, Segment, Feed } from "semantic-ui-react";

export default function SinglePost({id, user_id, title, photo, description, topic, created_at}) {
  return (
    
       <Segment raised>
         <h2 left>{title}</h2>
         <Feed.Label>
        <Image src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' avatar/>
      </Feed.Label>
         <Segment.Group horizontal>
          <Image src={photo} width='50%' height='100%' rounded/>
          <h5>{description}</h5> 
         </Segment.Group>
        
        <Segment.Group horizontal>
          <Segment><Icon name='heart'/> I love it!</Segment>
          <Segment><Icon name='plus'/> Follow</Segment>
          <Segment>
            <Icon name='envelope'/> Send Message
          </Segment>
        </Segment.Group>
    
       </Segment>

       
    
       
  )
}