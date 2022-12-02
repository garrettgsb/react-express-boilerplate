import React, { useState } from "react";
import Show from "./Show";
import EditForm from "./EditForm";

export default function ExerciseCard(props) {
  // console.log("this is the prop in ECard", props);

  const [edit, setEdit] = useState(false);

  return edit ? (
    <EditForm edit={edit} setEdit={setEdit} {...props} />
  ) : (
    <Show edit={edit} setEdit={setEdit} {...props} />
  );
}
