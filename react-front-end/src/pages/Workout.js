import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseCard from "./components/ExerciseCard";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import SaveSharpIcon from "@mui/icons-material/SaveSharp";
import AddIcon from "@mui/icons-material/Add";

import { Button, Fab, Stack, Typography } from "@mui/material";
import axios from "axios";

export default function Workout(props) {
  const [exercises, setExercises] = useState([]);
  const [workoutData, setWorkoutData] = useState([]);

  // Capture current workout id
  const workoutId = useParams().id;
  useEffect(() => {
    // Fetch exercises that belong to current workout
    axios
      .get(`/api/exercises?workoutId=${workoutId}`)
      .then((result) => {
        // Store in state
        setExercises(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
    // Fetch current workout info
    axios
      .get(`/api/workouts/${workoutId}`)
      .then((result) => {
        // Store in variable (not expected to change)
        setWorkoutData(result.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  // console.log(exercises);

  // State and handler for toggling editing "mode"
  const [editWorkout, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!editWorkout);
  };

  // Function to save changes and return to viewing "mode"
  const saveEdits = () => {
    // Send request and then
    toggleEdit();
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

        {/* When in edit workout state, render Add button */}
        {editWorkout && (
          <Fab
            color="primary"
            aria-label="add"
            size={"medium"}
            sx={{ alignSelf: "center" }}
          >
            <AddIcon />
          </Fab>
        )}
        {!editWorkout && (
          <Button
            variant="outlined"
            size="medium"
            startIcon={<EditSharpIcon />}
            onClick={toggleEdit}
          >
            Edit
          </Button>
        )}
        {editWorkout && (
          <Button
            variant="contained"
            size="medium"
            startIcon={<SaveSharpIcon />}
            onClick={saveEdits}
          >
            Save
          </Button>
        )}
      </Stack>
    </>
  );
}
