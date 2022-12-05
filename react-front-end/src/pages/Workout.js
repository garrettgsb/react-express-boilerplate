import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseCard from "./components/ExerciseCard";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Stack, Typography } from "@mui/material";
import Axios from "axios";
import CreateForm from "./components/ExerciseCard/CreateForm";

export default function Workout(props) {
  const [exercises, setExercises] = useState([]);
  const [workoutData, setWorkoutData] = useState([]);

  // Capture current workout id
  const workoutId = useParams().id;
  useEffect(() => {
    Promise.all([
      // Fetch exercises that belong to current workout
      Axios.get(`/api/exercises?workoutId=${workoutId}`),
      // Fetch current workout info
      Axios.get(`/api/workouts/${workoutId}`),
    ])
      .then((all) => {
        // Store in state
        setExercises(all[0].data);
        setWorkoutData(all[1].data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // State for toggling Create new exercise form
  const [adding, setAdding] = useState(false);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {workoutData.name}
      </Typography>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={6}
        maxWidth={1200}
        minWidth={380}
      >
        {/* Array of Exercise Cards */}
        {exercises.map((exercise) => (
          <ExerciseCard {...exercise} key={exercise.id} />
        ))}

        {/* Render Add button unless in addingExercise state */}
        {!adding && (
          <Fab
            aria-label="add"
            size="medium"
            sx={{ alignSelf: "center" }}
            onClick={setAdding}
          >
            <AddIcon />
          </Fab>
        )}

        {/* Render new exercise form when in addingExercise state */}
        {adding && (
          <CreateForm
            edit
            adding={adding}
            setAdding={setAdding}
            exercises={exercises}
            setExercises={setExercises}
          />
        )}
      </Stack>
    </>
  );
}
