import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Grid, Image, Container, Card, Header } from "semantic-ui-react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import { getPlantsByRoom, getPlantsForUser } from "../../helpers/selectors";

export default function Rooms({ plants, userId }) {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const plantsForUser = getPlantsForUser(plants, userId);

  const livingPlants = getPlantsByRoom(plantsForUser, 'Living room');
  const diningPlants = getPlantsByRoom(plantsForUser, 'Dining room');
  const bedroomPlants = getPlantsByRoom(plantsForUser, 'Bedroom');
  const officePlants = getPlantsByRoom(plantsForUser, 'Office');

  livingPlants && console.log('livingPlants', livingPlants);
  diningPlants && console.log('diningPlants', diningPlants);
  bedroomPlants && console.log('bedroomPlants', bedroomPlants);
  officePlants && console.log('officePlants', officePlants);

  const LivingPictureList = livingPlants && livingPlants.map((plant) => ({
    id: plant.id,
    url: plant.photo
  }));

  const DiningPictureList = diningPlants && diningPlants.map((plant) => ({
    id: plant.id,
    url: plant.photo
  }));

  const BedroomPictureList = bedroomPlants && bedroomPlants.map((plant) => ({
    id: plant.id,
    url: plant.photo
  }));

  const OfficePictureList = officePlants && officePlants.map((plant) => ({
    id: plant.id,
    url: plant.photo
  }));

  const addImageToBoard = (id) => {
    const pictureList = DiningPictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  return (
    <>
      <Container className="rooms">
        <Segment color="olive" raised>
          <Header>My Rooms</Header>
        </Segment>
        <Grid>
          <Card.Group itemsPerRow={2}>
            <Card id="room-card-living">
              <Card.Content>
                <Card.Header>
                  Living Room
                </Card.Header>
              </Card.Content>

              <div className="Board living" ref={drop}>
                {board.map((picture) => {
                  return <Picture url={picture && picture.url} id={picture && picture.id} />;
                })}
                <div className="Pictures">
                  {LivingPictureList.map((picture) => {
                    return <Picture url={picture && picture.url} id={picture && picture.id} />;
                  })}
                </div>
              </div>

            </Card>
            <Card>
              <Card.Content>
                <Card.Header>
                  Dining Room
                </Card.Header>
              </Card.Content>

              <div className="Board dining" ref={drop}>
                {board.map((picture) => {
                  return <Picture url={picture && picture.url} id={picture && picture.id} />;
                })}
                <div className="Pictures">
                  {DiningPictureList.map((picture) => {
                    return <Picture url={picture && picture.url} id={picture && picture.id} />;
                  })}
                </div>
              </div>

            </Card>
            <Card>
              <Card.Content>
                <Card.Header>
                  Bedroom
                </Card.Header>
              </Card.Content>

              <div className="Board bedroom" ref={drop}>
                {board.map((picture) => {
                  return <Picture url={picture && picture.url} id={picture && picture.id} />;
                })}
                <div className="Pictures">
                  {BedroomPictureList.map((picture) => {
                    return <Picture url={picture && picture.url} id={picture && picture.id} />;
                  })}
                </div>
              </div>

            </Card>
            <Card>
              <Card.Content>
                <Card.Header>
                  Office
                </Card.Header>
              </Card.Content>

              <div className="Board office" ref={drop}>
                {board.map((picture) => {
                  return <Picture url={picture && picture.url} id={picture && picture.id} />;
                })}
                <div className="Pictures">
                  {OfficePictureList.map((picture) => {
                    return <Picture url={picture.url} id={picture && picture.id} />;
                  })}
                </div>
              </div>

            </Card>
          </Card.Group>
        </Grid>
      </Container>
    </>
  );
}
