import React from "react";
import Rooms from "./components/Dashboard/Rooms";
import Namecard from "./components/Dashboard/Namecard";
import Reminders from "./components/Dashboard/Reminders";
import AddPlant from "./components/Dashboard/AddPlant";

import "semantic-ui-css/semantic.min.css";
import "./components/Dashboard/styles.css";
import { Header, Segment, Container, Button, Grid } from "semantic-ui-react";
import { getPlantsForUser, getUserById } from "./helpers/selectors";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard({ users, userId, plants, species }) {
  const user = getUserById(users, userId);
  const name = user && user.name;
  const userPlants = getPlantsForUser(plants, userId);
  const [isVisible, setIsVisible] = useState(false);

  if (!user) {
    return <h2>Please login or signup.</h2>;
  } else {
    return (
      <Container className="app-container">
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={12}>
              <Segment clearing>
                <Header textAlign="left" as="h2">
                  DASHBOARD
                  <Link to="/wishlist">
                    <Button
                      basic
                      color="green"
                      content="Wishlist"
                      floated="right"
                    />
                  </Link>
                  <Button positive floated="right" onClick={() => setIsVisible(true)}>
                    Add A New Plant!
                  </Button>
                </Header>
              </Segment>
              <Grid.Row>
                <Segment textAlign="left" raised>
                  Good Morning, {name}
                </Segment>
              </Grid.Row>
              <Grid.Row>
                <Rooms />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
              <Namecard user={user} />
              <Reminders plants={userPlants} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br></br>
        <br></br>
        {isVisible && <AddPlant user={user} species={species} setIsVisible={setIsVisible} />}
        <br></br>
      </Container>
    );
  }
}
