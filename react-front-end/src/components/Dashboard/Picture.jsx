import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, url, key }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({isDragging: !!monitor.isDragging()}),
    isDragging: (monitor) => {
      console.log(monitor.getItem());
    },
    options: { dropEffect: "move" } 
  }));
  return (
    <>
      <img
        ref={drag}
        src={url}
        width="150px"
        style={{ border: isDragging ? "5px solid pink" : "0px", borderRadius: "15px" }}
      />
      <p>{id}</p>
    </>
  );
}

export default Picture;
