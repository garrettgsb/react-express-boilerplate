import React from "react";
import Rooms from "./components/Dashboard/Rooms";
import Namecard from "./components/Dashboard/Namecard";
import Reminders from "./components/Dashboard/Reminders";
import AddPlant from "./components/Dashboard/AddPlant";

import "semantic-ui-css/semantic.min.css";
import "./components/Dashboard/styles.css";
import { Header, Segment, Container, Button, Grid } from "semantic-ui-react";
import { getPlantsForUser, getUserById } from "./helpers/selectors";

export default function Dashboard({ users, userId, plants, species }) {
  const user = getUserById(users, userId);
  const name = user && user.name;
  const userPlants = getPlantsForUser(plants, userId);

  if (!user) {
    return <h2>Please login or signup.</h2>;
  } else {
    return (
      <Container>
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={11}>
              <Segment clearing>
                <Header textAlign="left" as="h2">
                  DASHBOARD
                  <Button
                    basic
                    color="green"
                    content="Wishlist"
                    floated="right"
                  />
                </Header>
              </Segment>
              <Grid.Row>
                <Segment textAlign="left" raised>
                  Good Morning, {name}
                </Segment>
                <br></br>
              </Grid.Row>
              <Grid.Row>
                <Rooms />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={5}>
              <Namecard user={user} />
              <Reminders plants={userPlants} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br></br>
        <br></br>
        <AddPlant user={user} species={species} />
        <br></br>
        <br></br>
      </Container>
    );
  }
}
