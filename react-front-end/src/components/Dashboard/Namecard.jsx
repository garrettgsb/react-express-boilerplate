import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Button, Card, Icon, Segment } from 'semantic-ui-react'
import { getPlantsForUser } from "../../helpers/selectors";


export default function Namecard({ user, plants }) {
  const avatar = user && user.avatar
  const name = user && user.name
  const quote = user && user.quote

  const plantsForUser = getPlantsForUser(plants, user.id);

  return (
    <main class="name-container">
      <Card>
        <div class="image">
          <img src={avatar} alt="avatar" />
        </div>
        <Card.Content>
          <p class="header">{name}</p>
          <span className="date"><Icon name="user" /> User since {user && user.created_at.split('-')[0]}</span>
          <Segment color="olive" compact>
            <div className="meta"><h5>"{quote}"</h5></div>
          </Segment>
        </Card.Content>
        <Card.Content>
          <span className="left floated">
            <Button basic color='green'>
              <i className="leaf icon"></i>
              {plantsForUser && plantsForUser.length} Plants
            </Button>
          </span>
          <span className="right floated">
            <Button basic color='blue' content='Edit Profile' floated="left" />
          </span>
        </Card.Content>
      </Card>
    </main>
  );
}