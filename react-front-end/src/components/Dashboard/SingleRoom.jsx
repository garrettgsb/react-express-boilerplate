import React from "react";
import { useDrop } from "react-dnd";
import { Card } from "semantic-ui-react";
import Picture from "./Picture";

export function SingleRoom({ addImageToBoard, roomName, roomClassName, roomPlants }) {
  const [ _ , drop] = useDrop(() => ({
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
    url: plant.photo
  }));

  return (
    <Card>
    <Card.Content>
      <Card.Header>
        {roomName}
      </Card.Header>
    </Card.Content>
    <div className={roomClassName} ref={drop}>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id}/>;
        })}
      </div>
    </div>
  </Card>
  )
}