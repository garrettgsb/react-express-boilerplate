/* eslint-disable jsx-a11y/alt-text */
import dayjs from "dayjs";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Button, Image, Icon, Progress } from "semantic-ui-react";

function Picture({ id, url, key, nickname, setSelectedPlant, plant, reminder }) {

  const today = Date.now();
  const lastWatered = reminder && Date.parse(reminder.last_watered);
  const diff = today - lastWatered;
  const daysDiff = Math.floor(diff / 1000 / 60 / 60 / 24);
  const daysRemaining = reminder && (reminder.watering_interval - daysDiff);

  const waterPercent = reminder && Math.round((daysRemaining / reminder.watering_interval) * 100);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
    // isDragging: (monitor) => {
    //   console.log(monitor.getItem());
    // },
    options: { dropEffect: "move" }
  }));

  return (
    <>
      <Image
        style={{
          border: isDragging ? "5px solid pink" : "0px",
          background: "#EBEBE8",
          opacity: "0.95",
          borderRadius: "5%",
          padding: "10px",
          margin: "10px",
          width: "200px",
          height: "120px"
        }}
        size='tiny'
      >
        <div className="plant-card">
          <img
            ref={drag}
            src={url}
            style={{ borderRadius: "15%", width: "80px" }}
          />
          <div className="plant-progress">
            <b><i>{nickname}</i></b>

            <Button animated='vertical'
              color='olive'
              size="mini"
              style={{ height: "25px" }}
              onClick={() => {
                setSelectedPlant(plant);
              }}>
            <Button.Content hidden>See Info</Button.Content>
            <Button.Content visible>
              <Icon name='leaf' />
            </Button.Content>
          </Button>

          <Progress
            color="red"
            indicating
            value={waterPercent >= 0 ? daysRemaining : 0}
            progress="ratio"
            total={reminder && reminder.watering_interval}
            label="Days Left"
            style={{ fontSize: "11px" }}
          />
        </div>
      </div>
    </Image>
    </>
  );
}

export default Picture;
