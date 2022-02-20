import React, { useState } from 'react';
import moment from 'moment';
import 'semantic-ui-css/semantic.min.css';
import { Feed } from 'semantic-ui-react';
import { getUserById } from '../../../helpers/selectors';

export default function SingleComment({ users, user_id, comment_user_id, comment_text, commented_at }) {
  const date = moment(commented_at).startOf('day').fromNow();

  const user = getUserById(users, comment_user_id);
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label image={user && user.avatar} />
        <Feed.Content>
          <Feed.Date>{date}</Feed.Date>
          <Feed.Summary>
            <a>{user && user.name}</a> commented:
          </Feed.Summary>
          <Feed.Extra text>{comment_text}</Feed.Extra>
        </Feed.Content>
      </Feed.Event>
    </Feed>
    // <Segment.Group>
    //  <span>
    //    {comment_text}
    //  </span>
    //   <span>
    //     by
    //     <Image src={user && user.avatar} avatar></Image>

    //   </span>

    // </Segment.Group>
  );
}
