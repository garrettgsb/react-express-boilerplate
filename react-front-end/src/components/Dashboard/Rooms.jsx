import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Grid, Image, Container, Card, Header } from "semantic-ui-react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import { getPlantsByRoom, getPlantsForUser } from "../../helpers/selectors";

export default function Rooms({ plants, userId }) {
  const [boardLiving, setBoardLiving] = useState([]);
  const [boardDining, setBoardDining] = useState([]);
  const [boardBedroom, setBoardBedroom] = useState([]);
  const [boardOffice, setBoardOffice] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoardOffice(item.id), // add one for each board ???
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const allPlants = getPlantsForUser(plants, userId);

  const livingPlants = getPlantsByRoom(allPlants, 'Living room');
  const diningPlants = getPlantsByRoom(allPlants, 'Dining room');
  const bedroomPlants = getPlantsByRoom(allPlants, 'Bedroom');
  const officePlants = getPlantsByRoom(allPlants, 'Office');

  const allPictureList = allPlants && allPlants.map((plant) => ({
    id: plant.id,
    url: plant.photo
  }));

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

  const addImageToBoardLiving = (id) => {
    const pictureList = allPictureList.filter((picture) => id === picture.id);
    setBoardLiving((boardLiving) => [...boardLiving, pictureList[0]]);
  };

  const addImageToBoardDining = (id) => {
    const pictureList = allPictureList.filter((picture) => id === picture.id);
    setBoardDining((boardDining) => [...boardDining, pictureList[0]]);
  };

  const addImageToBoardBedroom = (id) => {
    const pictureList = allPictureList.filter((picture) => id === picture.id);
    setBoardBedroom((boardBedroom) => [...boardBedroom, pictureList[0]]);
  };

  const addImageToBoardOffice = (id) => {
    const pictureList = allPictureList.filter((picture) => id === picture.id);
    setBoardOffice((boardOffice) => [...boardOffice, pictureList[0]]);
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
                {boardLiving.map((picture) => {
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
                {boardDining.map((picture) => {
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
                {boardBedroom.map((picture) => {
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
                {boardOffice.map((picture) => {
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
