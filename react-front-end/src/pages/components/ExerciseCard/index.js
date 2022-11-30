import React, { useState } from "react";
import Show from "./Show";
import Edit from "./Edit";

// MOCK DATA
const exercise = {
  id: 1,
  name: "Back Squat",
  image:
    "https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  instructions:
    "Get under the bar, unrack and take a step back. Stay over the safety bars with your feet shoulder-width apart and toes pointing outward slightly. Breathe into your stomach and with your core engaged, slowly lower your body by bending the knees until your quads are parallel to the floor. Keep your chest up and back straight.",
};

const exerciseAttributes = {
  id: 1,
  workout_id: 1,
  exercise_id: 1,
  sets: 3,
  reps: 6,
  load: 225,
  rest_period: 3,
  notes: "Imagine sitting on a low stool and keep knees pointed outwards.",
};

export default function ExerciseCard(props) {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };

  return edit ? (
    <Edit edit={edit} toggleEdit={toggleEdit} />
  ) : (
    <Show edit={edit} toggleEdit={toggleEdit} />
  );
}
