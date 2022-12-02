import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  InputAdornment,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveSharpIcon from "@mui/icons-material/SaveSharp";
import { styled } from "@mui/material/styles";
import Axios from "axios";

// Styled component necessary for expandable portion of card
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// Styled component for wrapping each attribute of exercise
const ExerciseAttribute = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export default function ExerciseCard(props) {
  // State and handler for all exercise attributes
  // const [exerciseAttributes, setExerciseAttributes] = useState({
  //   name: props.name || "",
  //   sets: props.sets || null,
  //   reps: props.reps || null,
  //   load: props.load || null,
  //   rest: props.rest || null,
  //   notes: props.notes || null,
  //   image: props.image || null,
  //   instructions: props.instructions || null,
  // });

  // Capture workout id
  const workoutId = useParams().id;
  // Capture exercise id
  const exerciseId = props.id;

  // State and change handler for NAME
  const [name, setName] = useState(props.name || "");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // State and change handler for SETS
  const [sets, setSets] = useState(props.sets || null);
  const handleSetsChange = (event) => {
    setSets(event.target.value);
  };

  // State and change handler for REPS
  const [reps, setReps] = useState(props.reps || null);
  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  // State and change handler for LOAD
  const [load, setLoad] = useState(props.load || null);
  const handleLoadChange = (event) => {
    setLoad(event.target.value);
  };

  // State and change handler for REST
  const [rest, setRest] = useState(props.rest_period || null);
  const handleRestChange = (event) => {
    setRest(event.target.value);
  };

  // State and change handler for Notes
  const [notes, setNotes] = useState(props.notes || null);
  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  // State and change handler for Instructions
  const [instructions, setInstructions] = useState(props.instructions || null);
  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };

  const navigate = useNavigate();
  const saveEdits = () => {
    // Assemble exercise data object
    const exerciseData = {
      id: exerciseId,
      workout_id: workoutId,
      name,
      sets,
      reps,
      load,
      rest_period: rest,
      notes,
      instructions,
    };

    // Send request to update
    Axios.put(`/api/exercises/${exerciseId}`, exerciseData)
      .then((response) => {
        // Refresh current page
        navigate(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteExercise = () => {
    // Send request to delete
    Axios.delete(`/api/exercises/${exerciseId}`)
      .then((response) => {
        navigate(0);
      })
      .catch((e) => console.log(e));
  };

  // state and click handler for card expansion
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
    if (props.edit) {
      props.toggleEdit(false);
    }
  };

  return (
    <Card>
      {/* Main content: exercise name, attributes and expand button */}
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ExerciseAttribute>
          <TextField
            id="standard-required"
            helperText="Name"
            variant="standard"
            onChange={handleNameChange}
            value={name}
            sx={{ maxWidth: "80%" }}
          />
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <TextField
            id="standard-number"
            helperText="SETS"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleSetsChange}
            value={sets}
            sx={{ maxWidth: "30%" }}
          />
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <TextField
            id="standard-number"
            helperText="REPS"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleRepsChange}
            value={reps}
            sx={{ maxWidth: "50%" }}
          />
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <TextField
            id="standard-number"
            helperText="lbs"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleLoadChange}
            value={load}
            sx={{ maxWidth: "50%" }}
            inputProps={{ step: 5 }}
          />
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <TextField
            id="standard-number"
            helperText="REST"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            onChange={handleRestChange}
            value={rest}
            sx={{ maxWidth: "50%" }}
            InputProps={{
              endAdornment: <InputAdornment position="end">min</InputAdornment>,
            }}
          />
        </ExerciseAttribute>
        {/* Expand/collapse details chevron */}
        <CardActions>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </CardContent>

      {/* Expandable section containing image, instructions and notes */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box display="flex">
          <CardMedia
            component="img"
            sx={{ width: "40%", height: "auto" }}
            image={props.image || null}
            alt="exercise"
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            width="100%"
          >
            <CardContent>
              <Typography variant="h5">Instructions</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                multiline
                fullWidth
                value={instructions}
                onChange={handleInstructionsChange}
              />
              <Typography variant="h5" pt={"0.5em"}>
                Notes
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                multiline
                fullWidth
                value={notes}
                onChange={handleNotesChange}
              />
            </CardContent>
            <CardActions>
              {props.edit && (
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<SaveSharpIcon />}
                  onClick={saveEdits}
                  sx={{ ml: "auto" }}
                >
                  Save
                </Button>
              )}
              {/* Garbage can button */}
              <IconButton
                aria-label="delete"
                size="large"
                color="error"
                onClick={deleteExercise}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
}
