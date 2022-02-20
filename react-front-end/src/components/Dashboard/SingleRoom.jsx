import React from "react";
import { useDrop } from "react-dnd";
import { Card, Grid } from "semantic-ui-react";
import { getPlantReminder, getUserReminders } from "../../helpers/selectors";
import Picture from "./Picture";

export function SingleRoom({ addImageToBoard, roomName, roomClassName, roomPlants, setSelectedPlant, reminders, userId }) {
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

  // const remindersForUser = getUserReminders(userId, reminders);
  // console.log({ remindersForUser })

  const plantReminder = getPlantReminder(1, reminders);
  // console.log({ plantReminder })

  const PictureList = roomPlants && roomPlants.map((plant) => ({
    id: plant.id,
    url: plant.photo,
    nickname: plant.nickname,
    plant: plant,
    reminder: getPlantReminder(plant.id, reminders)
  }));

  return (
    <Card>
      <Card.Content>
        <Card.Header className="room-header">
          {roomName}
        </Card.Header>
      </Card.Content>

      <Grid>
        <Grid.Row columns={2}>
          <div className={roomClassName} ref={drop}>
            {PictureList.map((picture) => {
              return <Picture
                url={picture.url}
                id={picture.id}
                key={picture.id}
                nickname={picture.nickname}
                setSelectedPlant={setSelectedPlant}
                plant={picture.plant}
                reminder={picture.reminder} />;
            })}
          </div>
        </Grid.Row>
      </Grid>
    </Card>
  )
}