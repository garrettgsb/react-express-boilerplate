import React, { useState } from 'react';
import moment from 'moment';
import 'semantic-ui-css/semantic.min.css';
import { Feed } from 'semantic-ui-react';
import { getUserById } from '../../../helpers/selectors';

export default function SingleComment({ users, comment_user_id, comment_text, commented_at }) {
  const date = moment(commented_at).startOf('day').fromNow();

  const user = getUserById(users, comment_user_id);
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label image={user && user.avatar} href={`/profile/${comment_user_id}`}/>
        <Feed.Content>
          <Feed.Date>{date}</Feed.Date>
          <Feed.User href={`/profile/${comment_user_id}`}>{user && user.name}</Feed.User> commented:
          <Feed.Extra text>{comment_text}</Feed.Extra>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}
