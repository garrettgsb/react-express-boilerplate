import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../../Newsfeed.css';
import { Button, Icon, Image, Segment, Label, Grid } from 'semantic-ui-react';
import { getUserById } from '../../../helpers/selectors';
import { likePost } from './SinglePostService';

export default function SinglePost({ id, user_id, title, photo, description, topic, number_of_likes, created_at, users }) {
  const [state, setState] = useState({
    likes: number_of_likes,
    like_text: 'Like',
    clicked: false,
  });

  const likeClicked = () => {
    const new_number_of_likes = number_of_likes + 1;

    likePost(new_number_of_likes, id)
      .then((result) => {
        if (result.data.updated) {
          updateLikesOnUi(new_number_of_likes);
        } else {
          console.error(`Error liking post(id: ${id})`);
        }
      })
      .catch((error) => console.error(`Error liking post(id: ${id})`, error));
  };

  const updateLikesOnUi = (new_number_of_likes) => {
    setState((prev) => ({
      ...prev,
      likes: new_number_of_likes,
      like_text: 'Liked',
      clicked: true,
    }));
  };

  const user = getUserById(users, user_id);

  const getMonth = (value) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let month = '';
    let num = Number(value);
    for (let i = 0; i < months.length; i++) {
      if (num === i + 1) {
        month = months[i];
      }
    }
    return month;
  };

  return (
    <Segment className='newsfeed' raised>
      <Segment.Group horizontal>
        <Segment>
          <h2>{title}</h2>
        </Segment>
        <Segment>
          <Image src={user && user.avatar} avatar />
          <b>{user && user.name}</b> on{' '}
          {created_at && getMonth(created_at.split('-')[1]) + ' ' + created_at.split('-')[2].slice(0, 2) + ', ' + created_at.split('-')[0]}
        </Segment>
        <Segment>
          <Label as='a' color='orange' ribbon='right'>
            <Icon name='leaf' />
            {topic}
          </Label>
        </Segment>
      </Segment.Group>

      <Segment.Group horizontal>
        <Image src={photo} width='50%' height='100%' rounded />
        <span>
          <h5>{description}</h5>
        </span>
      </Segment.Group>

      <Grid horizontal>
        <Button as='div' labelPosition='right' id='likes' onClick={likeClicked} disabled={state.clicked}>
          <Button color='orange'>
            <Icon name='heart' />
            {state.like_text}
          </Button>
          <Label as='a' basic color='brown' pointing='left'>
            {state.likes}
          </Label>
        </Button>

        <Button as='div' labelPosition='right' id='follow'>
          <Button color='olive'>
            <Icon name='user' />
          </Button>
          <Label as='a' basic color='brown' pointing='left'>
            View Profile
          </Label>
        </Button>

        <Button as='div' labelPosition='right' id='message'>
          <Button color='yellow'>
            <Icon name='comment alternate' />
          </Button>
          <Label as='a' basic color='brown' pointing='right'>
            Comment
          </Label>
        </Button>
      </Grid>
    </Segment>
  );
}
