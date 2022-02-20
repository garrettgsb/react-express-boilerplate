/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDrag } from "react-dnd";
import { Button, Card, Grid, Image } from "semantic-ui-react";

function Picture({ id, url, key, nickname, setSelectedPlant, plant }) {

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
        size="small"
        style={{ border: isDragging ? "5px solid pink" : "0px", background: "#EBEBE8", borderRadius: "5%", padding: "10px", margin: "10px" }}
      >
        <img
          ref={drag}
          src={url}
          style={{ borderRadius: "15%" }}
        />
        <p><b>{nickname}</b></p>
        <Button size="small" color="green" onClick={() => {
          // console.log({ plant })
          setSelectedPlant(plant);
        }}>See Info</Button>
      </Image>
    </>
  );
}

export default Picture;
