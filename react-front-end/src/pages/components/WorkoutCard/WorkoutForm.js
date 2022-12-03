import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Button, Box, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Description } from "@mui/icons-material";
import Axios from "axios";
import { usePrograms } from "../../../App";
import {useNavigate} from "react-router-dom";

// props = create, cancleCreate, edit, cancelEdit

export default function WorkoutForm(props) {

  const [state, setState] = useState({
    name: props.workout ? props.workout.name : "",
    program_id: props.workout ? props.workout.program_id : props.programId,
    description: props.workout ? props.workout.description : "",
    duration: props.workout ? props.workout.duration : null,
    image: props.workout ? props.workout.image : "",
  });

  const handleCancel = () => {
    return props.edit ? props.cancelEdit() : props.cancelCreate();
  };

  const nameCallback = (event) => {
    return setState({ ...state, name: event.target.value });
  };

  const durationCallback = (event) => {
    return setState({ ...state, duration: event.target.value });
  };

  const imageCallback = (event) => {
    return setState({ ...state, image: event.target.value });
  };

  const descriptionCallback = (event) => {
    return setState({ ...state, description: event.target.value });
  };

  const saveWorkout = () => {
    return props.edit ? editWorkout() : createWorkout()
  }

  const editWorkout = () => {
    Axios.put(`/api/workouts/${props.workout.id}`, state)
    .then((result) => {
      props.cancelEdit();
      props.getWorkout();
      
    })
    .catch((e) => console.log(e))
  }
  
  const createWorkout = () => {
    Axios.post(`/api/workouts`, state)
    .then((result) => {
      props.cancelCreate();
      props.getWorkout();
    })
    .catch((e) => console.log(e))
  }


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
        </Box>
      </Card>
    </>
  );
}
