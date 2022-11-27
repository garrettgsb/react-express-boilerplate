import React from "react";
import Exercise from "./Exercise";
import {
  Card,
  CardMedia,
  Item,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const exercise = {
  id: 1,
  name: "Back Squat",
  image:
    "https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  instructions:
    "Get under the bar, unrack and take a step back. Stay over the safety bars with your feet shoulder-width apart and toes pointing outward slightly.  Breathe into your stomach and with your core engaged, slowly lower your body by bending the knees until your quads are parallel to the floor. Keep your chest up and back straight.",
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

export default function Workout(props) {
  // const mappedExercises = props.exercises.map((exercise) => {
  //     return <Exercise
  //     key={exercise.id}
  //     name={exercise.name}
  //     muscle={exercise.muscle}
  //     equipment={exercise.equipment}
  //     difficulty={exercise.difficulty}
  //     instruction={exercise.instruction}

  //     />;
  // });

  return (
    <>
      <Toolbar />
      <Typography variant="h3" gutterBottom>
        This is Workout page
      </Typography>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        {/* Array of Workout Cards - to be made into separate component */}
        <Card variant="outlined">
          <Typography variant="h4">{exercise.name}</Typography>
          <CardMedia
            component="img"
            height="140"
            image={exercise.image}
            alt="green iguana"
          />
        </Card>
        <Card variant="outlined">
          <Typography variant="h4">{exercise.name}</Typography>
          <CardMedia
            component="img"
            height="140"
            image={exercise.image}
            alt="green iguana"
          />
        </Card>
      </Stack>
    </>
  );
}
