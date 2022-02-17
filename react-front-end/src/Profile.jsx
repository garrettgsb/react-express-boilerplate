import React from "react";
import { useParams } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import PlantList from "./components/Profile/PlantList";
import { getPlantsForUser, getUserById } from "./helpers/selectors";
import "./components/Profile/Profile.css";
import { Container, Grid, Segment, Button } from "semantic-ui-react";

export default function Profile({ plants, users, userId }) {

  const params = useParams();
  const user_id = params.user_id;

  const user = getUserById(users, user_id);
  const plantsForUser = getPlantsForUser(plants, user_id);

  const loggedUser = getUserById(users, userId);

  return (
    <Container>
      <Segment>
        <h2>
          Welcome {loggedUser && loggedUser.name}, thanks for visiting my profile!
        </h2>
      </Segment>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width={11}>
            <Segment>
              <PlantList plants={plantsForUser} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
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