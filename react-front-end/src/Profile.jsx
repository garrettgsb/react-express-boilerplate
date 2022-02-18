import React from "react";
import { useParams } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import PlantList from "./components/Profile/PlantList";
import { getPlantsForUser, getUserById } from "./helpers/selectors";
import "./components/Profile/Profile.css";
import { Container, Grid, Segment, Button, Card } from "semantic-ui-react";

export default function Profile({ plants, users, userId }) {

  const params = useParams();
  const user_id = Number(params.user_id);

  const user = getUserById(users, user_id);
  const plantsForUser = getPlantsForUser(plants, user_id);

  console.log('plantsfor USER', plantsForUser)

  const loggedUser = getUserById(users, userId);
  const profileUser = Number(user_id);

  return (
    <Container>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={12}>
            <Segment>
              {loggedUser && loggedUser.id !== profileUser ?
                <h2>
                  Welcome {loggedUser && loggedUser.name}, thanks for visiting my profile!
                </h2> : <h2>My Profile</h2>}
            </Segment>
            <Segment style={{ overflow: 'auto', maxWidth: 2000 }} >
              <Card.Group itemsPerRow={3}>
                <PlantList plants={plantsForUser} user={userId} />
              </Card.Group>
            </Segment>
          </Grid.Column>

          <Grid.Column width={4}>
            <div>
              <div className="ui card">
                <div className="image">
                  <img src={user && user.avatar} alt="avatar" />
                </div>
                <div className="content">
                  <a className="header">{user && user.name}</a>
                  <div className="meta">
                    <span className="date">Joined in {user && user.created_at.split('-')[0]}</span>
                  </div>
                  <div className="description">
                    {user && user.name} is an art director living in New York.
                    <h5>"{user && user.quote}"</h5>
                  </div>
                </div>
                <div className="extra content">
                  <span className="left floated">
                    <Button basic color='green'>
                      <i className="leaf icon"></i>
                      {plantsForUser && plantsForUser.length} Plants
                    </Button>
                  </span>
                  <span className="right floated">
                    <button className="ui button"><i className="add icon"></i>Follow</button>
                  </span>
                </div>
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}