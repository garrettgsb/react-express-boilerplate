/* eslint-disable jsx-a11y/alt-text */
import dayjs from "dayjs";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Button, Image, Icon, Progress } from "semantic-ui-react";

function Picture({ id, url, key, nickname, setSelectedPlant, plant, reminder }) {

  // reminder && console.log('reminder!!!', reminder);
  // plant && console.log('plant!!!', plant);

  const today = Date.now();
  const lastWatered = reminder && Date.parse(reminder.last_watered);
  // reminder && console.log('Date.parse(reminder.last_watered)', Date.parse(reminder.last_watered));
  // console.log('today', today);
  // reminder && console.log('normal last water', reminder.last_watered);
  // console.log('regular date today', Date.now());

  const diff = today - lastWatered;
  const daysDiff = Math.floor(diff / 1000 / 60 / 60 / 24);

  // reminder && console.log('interval !!!', reminder.watering_interval);
  // console.log( {diff} )
  // console.log({ daysDiff })

  const daysRemaining = reminder && (reminder.watering_interval - daysDiff);

  const waterPercent = reminder && Math.round((daysRemaining / reminder.watering_interval) * 100);
  // console.log('waterPercent', waterPercent)
  // const [progress, setProgress] = useState( 80 );

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
    // isDragging: (monitor) => {
    //   console.log(monitor.getItem());
    // },
    options: { dropEffect: "move" }
  }));

  // const water = () => {
  //   setProgress((prev) => (prev >= 100 ? 0 : prev + 20));
  // }

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
          width: "200px"
        }}
        size='tiny'
      // circular
      >
        <div className="plant-card">
          <img
            ref={drag}
            src={url}
            style={{ borderRadius: "15%", width: "80px" }}
          />

          <div className="plant-progress">
            <b><i>{nickname}</i></b>
            <Button
              color="olive"
              size="tiny"
              onClick={() => {
                setSelectedPlant(plant);
              }}>
              <Icon name="leaf" />Info
            </Button>
            {/* <Button
            color="blue"
            size="tiny"
            onClick={water}
          >
            <Icon name="check circle" />Water
          </Button> */}
            <Progress
              color="red"
              // percent={waterPercent}
              // onClick={water} 
              indicating
              // value={daysRemaining}
              // total={reminder && reminder.watering_interval}
              // progress="ratio"
              // value={daysRemaining}
              // total={reminder && reminder.watering_interval}
              // progress="ratio"
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
