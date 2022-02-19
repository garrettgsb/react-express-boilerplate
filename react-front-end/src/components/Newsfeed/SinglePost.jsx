import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "../../Newsfeed.css";
import { Button, Icon, Image, Segment, Label } from "semantic-ui-react";
import { getUserById } from "../../helpers/selectors";




export default function SinglePost({ id, user_id, title, photo, description, topic, number_of_likes, created_at, users }) {
  
  const [state, setState] = useState({
    likes: number_of_likes, 
    like_text: 'Like',
    clicked: false
  });
  
  const likeClicked = () => {
    setState((prev) => ({
      ...prev,
      likes: state.likes + 1,
      like_text: 'Liked',
      clicked: true
    }));

  }
  const user = getUserById(users, user_id);

  const getMonth = (value) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = '';
    let num = Number(value);
    for (let i = 0; i < months.length; i++) {
      if (num === i + 1) {
        month = months[i];
      };
    };
    return month;
  };
  
  return (

    <Segment className="newsfeed" raised>
      <h2>{title}</h2>
      <Button floated="right" color="olive">
        <Icon name="leaf" />{topic}
      </Button>
      <div>
        <Image src={user && user.avatar} avatar />
        {/* <span>Posted by <b>{user && user.name}</b> on {created_at && created_at.split('T')[0]}</span> */}
        <span>Posted by <b>{user && user.name}</b> on {created_at && getMonth(created_at.split('-')[1]) + ' ' + created_at.split('-')[2].slice(0, 2) + ', ' + created_at.split('-')[0]}</span>
      </div>
      <Segment.Group horizontal>
        <Image src={photo} width='50%' height='100%' rounded />
        <h5>{description}</h5>
      </Segment.Group>

      <Segment.Group horizontal>
        <Segment>
         
          <Button as='div' labelPosition='right' id="likes" onClick={likeClicked} disabled={state.clicked}>
            <Button color='orange'>
              <Icon name='heart' />
              {state.like_text}
            </Button>
            <Label as='a' basic color='brown' pointing='left'>
              {state.likes}
            </Label>
          </Button>

        </Segment>
        <Segment>
        <Button as='div' labelPosition='right' id="follow">
      <Button color='olive'>
        <Icon name='plus' />
      </Button>
        <Label as='a' basic color='brown' pointing='left'>
          Follow
        </Label>
      </Button> 
        </Segment>
        <Segment>
        <Button as='div' labelPosition='right' id="message">
      <Button color='yellow'>
        <Icon name='envelope' />
      </Button>
        <Label as='a' basic color='brown' pointing='right'>
          Message
        </Label>
      </Button> 
        </Segment>
      </Segment.Group>

    </Segment>




  )
}