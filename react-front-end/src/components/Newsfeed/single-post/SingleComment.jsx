import React, { useState } from "react";
import moment from "moment";
import "semantic-ui-css/semantic.min.css";
import { Feed, Divider, Icon } from "semantic-ui-react";
import { getUserById } from "../../../helpers/selectors";

export default function SingleComment({ users, comment_user_id, comment_text, commented_at }) {
  const date = moment(commented_at).fromNow();

  const user = getUserById(users, comment_user_id);
  const user_id = user && user.id;
  const linkToUserProfile = "/profile/" + user_id;

  return (
    <Feed>
      <Feed.Event>
        <Feed.Label image={user && user.avatar} href={linkToUserProfile} />
        <Feed.Content>
          <Feed.Date>{date}</Feed.Date>
          <Feed.Summary>
            <a href={linkToUserProfile}>{user && user.name} </a> commented:
          </Feed.Summary>
          <Feed.Extra text>{comment_text}</Feed.Extra>
        </Feed.Content>
      </Feed.Event>
      <Divider horizontal>
        <Icon name="leaf" color="grey" />
      </Divider>
    </Feed>
  );
}
