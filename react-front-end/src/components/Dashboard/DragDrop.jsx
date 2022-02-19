import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
// import "../App.css";
import { getPlantsForUser } from "../../helpers/selectors";

function DragDrop({ plants, userId }) {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const plantsForUser = getPlantsForUser(plants, userId);

  // console.log('plantsForUser', plantsForUser)

  const PictureList = plantsForUser.map((plant) => ({
      id: plant.id,
      url: plant.photo
  }));

  console.log('PictureList', PictureList);

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;