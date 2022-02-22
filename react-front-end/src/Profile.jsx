import React from "react";
import { useParams } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import PlantList from "./components/Profile/PlantList";
import { getPlantsForUser, getUserById } from "./helpers/selectors";
import "./components/Profile/Profile.css";
import { Container, Grid, Segment, Button, Card, Image } from "semantic-ui-react";

export default function Profile({ plants, users, userId }) {

  const params = useParams();
  const user_id = Number(params.user_id);

  const user = getUserById(users, user_id);
  const plantsForUser = getPlantsForUser(plants, user_id);
  const loggedUser = getUserById(users, userId);
  const profileUser = Number(user_id);

  if (!user) {
    return (
      <></>
    );
  } else {
    return (
      <Container className="profile">
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={12}>
              <Segment className="profile">
                {loggedUser && loggedUser.id !== profileUser ?
                  <h2>
                    Welcome {loggedUser && loggedUser.name}, thanks for visiting my profile!
                  </h2> : <h2>My Profile</h2>}
              </Segment>

              

              <Segment style={{ overflow: 'auto', maxWidth: 2000, backgroundColor: "rgba(225, 205, 48, 0.25)", backgroundImage: "url(https://www.transparenttextures.com/patterns/asfalt-light.png)" }} >
                <Card.Group itemsPerRow={3}>
                  <PlantList plants={plantsForUser} user={userId} />
                </Card.Group>
              </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
              <div>
                <div className="ui card avatar" style={{ overflow: 'auto', maxWidth: 2000, backgroundColor: "rgba(225, 205, 48, 0.65)", backgroundImage: "url(https://www.transparenttextures.com/patterns/asfalt-light.png)" }} >
                  <Image src={user && user.avatar} alt="avatar" size="medium" />
                  <div className="content">
                    <a className="header">{user && user.name}</a>
                    <div className="date">
                      <span className="date">Joined in {user && user.created_at.split('-')[0]}</span>
                    </div>
                    <div className="description">
                      {user && user.name} is an art director living in New York.
                      <Segment color="olive" style={{ backgroundColor: "rgba(255, 255, 255, 0.20)"}}>
                        <h5>"{user && user.quote}"</h5>
                      </Segment>
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="floated">
                      <Button inverted color='grey'>
                        <i className="leaf icon"></i>
                        {plantsForUser && plantsForUser.length} Plants
                      </Button>
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
}