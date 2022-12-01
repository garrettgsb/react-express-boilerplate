import React, { useState } from "react";
import Show from "./Show";
import Edit from "./Edit";

export default function ExerciseCard(props) {
  // console.log("this is the prop in ECard", props);

  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };

  return edit ? (
    <Edit edit={edit} toggleEdit={toggleEdit} {...props} />
  ) : (
    <Show edit={edit} toggleEdit={toggleEdit} {...props} />
  );
}
