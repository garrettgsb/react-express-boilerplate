import React from "react";
import Rooms from "./components/Dashboard/Rooms";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Namecard from "./components/Dashboard/Namecard";
import Reminders from "./components/Dashboard/Reminders";
import AddPlant from "./components/Dashboard/AddPlant";
import ViewPlant from "./components/Dashboard/ViewPlant";

import "semantic-ui-css/semantic.min.css";
import "./components/Dashboard/styles.css";
import { Header, Segment, Container, Button, Grid } from "semantic-ui-react";
import { getPlantsForUser, getUserById } from "./helpers/selectors";
import { useState } from "react";
import { Link } from "react-router-dom";
import DailyReminders from "./components/Dashboard/DailyReminders";

export default function Dashboard({ users, userId, plants, species, reminders, updateLocation, setAppState }) {
  const user = getUserById(users, userId);
  const name = user && user.name;
  const userPlants = getPlantsForUser(plants, userId);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

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
                      positive
                      content="See Wishlist"
                      floated="right"
                    />
                  </Link>
                  <Button positive floated="right" onClick={() => setIsVisible(true)}>
                    Add A New Plant!
                  </Button>
                </Header>
              </Segment>
              <Segment textAlign="left" raised>
                <Header as="h3" className="dash-header">
                  <div>
                    Good Morning, {name}!
                  </div>
                  <DailyReminders plants={userPlants} reminders={reminders} userId={userId} />
                </Header>
              </Segment>
              <Grid.Row>
                <DndProvider backend={HTML5Backend}>
                  <Rooms plants={plants} userId={userId} updateLocation={updateLocation} setSelectedPlant={setSelectedPlant} reminders={reminders}/>
                </DndProvider>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
              <div>
                <Namecard user={user} plants={plants} />
                <Reminders plants={userPlants} reminders={reminders} userId={userId} setAppState={setAppState} />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br></br>
        <br></br>
        {isVisible && (
          <AddPlant user={user} species={species} setIsVisible={setIsVisible} setAppState={setAppState} />
        )}
        <br></br>
        {selectedPlant && (
          <ViewPlant
            user={user}
            species={species}
            plant={selectedPlant}
            closeViewPlant={() => setSelectedPlant(null)}
          />
        )}
        <br></br>
      </Container>
    );
  }
}
