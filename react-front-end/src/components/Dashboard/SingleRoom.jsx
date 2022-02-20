import React from "react";
import { useDrop } from "react-dnd";
import { Card, Grid } from "semantic-ui-react";
import Picture from "./Picture";

export function SingleRoom({ addImageToBoard, roomName, roomClassName, roomPlants, setSelectedPlant }) {
  const [_, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => {
      console.log(item.id);
      addImageToBoard(item.id, roomName);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const PictureList = roomPlants && roomPlants.map((plant) => ({
    id: plant.id,
    url: plant.photo,
    nickname: plant.nickname,
    plant: plant
  }));

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {roomName}
        </Card.Header>
      </Card.Content>

      <Grid>
        <Grid.Row columns={2}>
          <div className={roomClassName} ref={drop}>
            {PictureList.map((picture) => {
              return <Picture url={picture.url} id={picture.id} key={picture.id} nickname={picture.nickname} setSelectedPlant={setSelectedPlant} plant={picture.plant}/>;
            })}
          </div>
        </Grid.Row>
      </Grid>
    </Card>
  )
}