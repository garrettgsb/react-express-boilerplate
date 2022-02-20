/* eslint-disable jsx-a11y/alt-text */
import dayjs from "dayjs";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { Button, Image, Icon, Progress } from "semantic-ui-react";

function Picture({ id, url, key, nickname, setSelectedPlant, plant, reminder }) {

  const [progress, setProgress] = useState(33);

  reminder && console.log('reminder!!!', reminder);
  plant && console.log('plant!!!', plant);

  const today = Date.now();
  // const timeRemaining = today;
  const timeRemaining = today;

  console.log({ timeRemaining });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
    // isDragging: (monitor) => {
    //   console.log(monitor.getItem());
    // },
    options: { dropEffect: "move" }
  }));

  const water = () => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 20));
  }

  return (
    <>
      <Image
        size="small"
        style={{ border: isDragging ? "5px solid pink" : "0px", background: "#EBEBE8", opacity: "0.95", borderRadius: "5%", padding: "10px", margin: "10px" }}
      >
        <img
          ref={drag}
          src={url}
          style={{ borderRadius: "15%" }}
        />
        <div>
          <p><b>{nickname}</b></p>
          <Button color="olive" onClick={() => {
            setSelectedPlant(plant);
          }}><Icon name="leaf" />Info</Button>
          <div>
            <Progress color="blue" percent={progress} indicating />
            <Button onClick={water}>Water</Button>
          </div>
        </div>
      </Image>
    </>
  );
}

export default Picture;
