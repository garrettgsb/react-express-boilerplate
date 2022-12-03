import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Button, Box, TextField } from "@mui/material";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Confirmation from "../Confirmation";

//A form for creating, editing workout
export default function WorkoutForm(props) {
  //Assemble workout data object.
  //If it's editing, there is a workout
  //If it's creating, there is no workout
  const [state, setState] = useState({
    name: props.workout ? props.workout.name : "",
    program_id: props.workout ? props.workout.program_id : props.programId,
    description: props.workout ? props.workout.description : "",
    duration: props.workout ? props.workout.duration : null,
    image: props.workout ? props.workout.image : "",
  });

  //State for Confirm modal.
  const [confirmOpen, setConfirmOpen] = useState(false);

  //Setstate for Name
  const nameCallback = (event) => {
    return setState({ ...state, name: event.target.value });
  };

  //Setstate for Duration
  const durationCallback = (event) => {
    return setState({ ...state, duration: event.target.value });
  };

  //Setstate for image
  const imageCallback = (event) => {
    return setState({ ...state, image: event.target.value });
  };

  //Setstate for description
  const descriptionCallback = (event) => {
    return setState({ ...state, description: event.target.value });
  };

  //Handle Save workout 
  const saveWorkout = () => {
    return props.edit ? editWorkout() : createWorkout();
  };

  //Handle cancel 
  const handleCancel = () => {
    return props.edit ? props.cancelEdit() : props.cancelCreate();
  };

  //Send a request to put workout 
  const editWorkout = () => {
    Axios.put(`/api/workouts/${props.workout.id}`, state)
      .then((result) => {
        props.cancelEdit();
        props.getWorkout();
      })
      .catch((e) => console.log(e));
  };

  //Send a request to create workout
  const createWorkout = () => {
    Axios.post(`/api/workouts`, state)
      .then((result) => {
        props.cancelCreate();
        props.getWorkout();
      })
      .catch((e) => console.log(e));
  };

  //Send a request to delete workout 
  const handleDelete = () => {
    Axios.delete(`/api/workouts/${props.workout.id}`)
    .then((result) => {
      props.cancelEdit();
      props.getWorkout();
    })
    .catch((e) => console.log(e));
  };

  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <TextField
          id="standard-basic"
          label="Workout Name"
          variant="standard"
          name="Workout name"
          type="text"
          placeholder={state.name}
          multiline
          value={state.name}
          onChange={nameCallback}
        />

        <TextField
          id="standard-basic"
          label="Duration"
          variant="standard"
          name="Workout duration"
          type="text"
          placeholder={state.duration}
          value={state.duration}
          onChange={durationCallback}
        />

        <TextField
          id="standard-basic"
          label="URL"
          variant="standard"
          name="Workout URL"
          type="text"
          placeholder={state.image}
          multiline
          value={state.image}
          onChange={imageCallback}
        />
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          name="Workout description"
          type="text"
          placeholder={state.description}
          multiline
          value={state.description}
          onChange={descriptionCallback}
        />

        <Box sx={{ "& button": { m: 1 } }}>
          <Button color="secondary" size="small" onClick={handleCancel}>
            Cancel
          </Button>

          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={saveWorkout}
          >
            Save
          </Button>

          {props.edit ? <DeleteIcon onClick={() => {setConfirmOpen(true)}}/> : null}
          {confirmOpen ? <Confirmation confirmOpen={confirmOpen} setConfirmOpen={setConfirmOpen} confirmDelete={handleDelete}/> : null}
        </Box>
      </Card>
    </>
  );
}
