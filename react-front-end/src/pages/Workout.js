import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseCard from "./components/ExerciseCard";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Stack, Typography } from "@mui/material";
import Axios from "axios";
import EditForm from "./components/ExerciseCard/EditForm";
import CreateForm from "./components/ExerciseCard/CreateForm";

export default function Workout(props) {
  const [exercises, setExercises] = useState([]);
  const [workoutData, setWorkoutData] = useState([]);

  // Capture current workout id
  const workoutId = useParams().id;
  useEffect(() => {
    // Fetch exercises that belong to current workout
    Axios.get(`/api/exercises?workoutId=${workoutId}`)
      .then((result) => {
        // Store in state
        setExercises(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
    // Fetch current workout info
    Axios.get(`/api/workouts/${workoutId}`)
      .then((result) => {
        // Store in state
        setWorkoutData(result.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // State and handler for toggling editing "mode"
  const [adding, setAdding] = useState(false);
  const toggleAdding = () => {
    setAdding(!adding);
  };

  // Function to save changes and return to viewing "mode"
  const saveEdits = () => {
    // Send request and then
  };

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
        minWidth={500}
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
            onClick={toggleAdding}
          >
            <AddIcon />
          </Fab>
        )}

        {/* Render new exercise form when in addingExercise state */}
        {adding && (
          <EditForm
            edit
            adding={adding}
            exercises={exercises}
            setExercises={setExercises}
          />
        )}
      </Stack>
    </>
  );
}
