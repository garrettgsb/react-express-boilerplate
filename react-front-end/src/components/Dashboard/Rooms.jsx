import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Grid, Container, Card, Header } from "semantic-ui-react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import { getPlantsByRoom, getPlantsForUser } from "../../helpers/selectors";
import { SingleRoom } from "./SingleRoom";

export default function Rooms({ plants, userId, updateLocation, setSelectedPlant, reminders }) {
  const addImageToBoard = (plant_id, location) => {
    console.log({ plant_id, location })
    updateLocation(plant_id, location);
  }
  const allPlants = getPlantsForUser(plants, userId);

  const livingRoom = 'Living room';
  const diningRoom = 'Dining room';
  const bedroom = 'Bedroom';
  const office = 'Office';

  const livingPlants = getPlantsByRoom(allPlants, livingRoom);
  const diningPlants = getPlantsByRoom(allPlants, diningRoom);
  const bedroomPlants = getPlantsByRoom(allPlants, bedroom);
  const officePlants = getPlantsByRoom(allPlants, office);

  return (
    <>
      <Container className="rooms">
        <Segment color="olive" raised style={{ backgroundColor: "rgba(225, 205, 48, 0.50)", backgroundImage: "url(https://www.transparenttextures.com/patterns/asfalt-light.png)" }} >
          <Header className="reminders-title" style={{ color: "white" }}>My Rooms</Header>
        </Segment>
        <Grid>
          <Card.Group itemsPerRow={2}>
            <SingleRoom addImageToBoard={addImageToBoard} roomName={livingRoom} roomClassName="Board living" roomPlants={livingPlants} setSelectedPlant={setSelectedPlant} reminders={reminders} userId={userId} />
            <SingleRoom addImageToBoard={addImageToBoard} roomName={diningRoom} roomClassName="Board dining" roomPlants={diningPlants} setSelectedPlant={setSelectedPlant} reminders={reminders} userId={userId} />
            <SingleRoom addImageToBoard={addImageToBoard} roomName={bedroom} roomClassName="Board bedroom" roomPlants={bedroomPlants} setSelectedPlant={setSelectedPlant} reminders={reminders} userId={userId} />
            <SingleRoom addImageToBoard={addImageToBoard} roomName={office} roomClassName="Board office" roomPlants={officePlants} setSelectedPlant={setSelectedPlant} reminders={reminders} userId={userId} />
          </Card.Group>
        </Grid>
      </Container>
    </>
  );
}
