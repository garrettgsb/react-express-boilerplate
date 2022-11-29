import React, { useState } from "react";
import ExerciseCard from "./components/ExerciseCard";
import AddIcon from "@mui/icons-material/Add";

import {
  Card,
  CardMedia,
  Fab,
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
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Toolbar />
      <Typography variant="h4" gutterBottom>
        This is Workout page
      </Typography>

      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
        maxWidth={1200}
        minWidth={520}
      >
        {/* Array of Exercise Cards */}
        <ExerciseCard />

        {/* When in edit state, render Add button */}
        {edit && (
          <Fab
            color="primary"
            aria-label="add"
            size={"medium"}
            sx={{ alignSelf: "center" }}
          >
            <AddIcon />
          </Fab>
        )}
      </Stack>
    </>
  );
}
