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
  // Capture workout id
  const workoutId = useParams().id;
  // Capture exercise id
  const exerciseId = props.id;

  // State for NAME
  const [name, setName] = useState(props.name || "");

  // State for SETS
  const [sets, setSets] = useState(props.sets || "");

  // State for REPS
  const [reps, setReps] = useState(props.reps || "");

  // State for LOAD
  const [load, setLoad] = useState(props.load || "");

  // State for REST
  const [rest, setRest] = useState(props.rest_period || "");

  // State for Instructions
  const [instructions, setInstructions] = useState(props.instructions || "");

  // State for Notes
  const [notes, setNotes] = useState(props.notes || "");

  const navigate = useNavigate();
  const submitForm = () => {
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
        // setExpanded(false);
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
        // Refresh current page
        navigate(0);
      })
      .catch((e) => console.log(e));
  };

  // state and click handler for card expansion
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    if (props.edit) {
      props.toggleEdit(false);
    }
    setExpanded(!expanded);
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setSets(e.target.value)}
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
            onChange={(e) => setReps(e.target.value)}
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
            onChange={(e) => setLoad(e.target.value)}
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
            onChange={(e) => setRest(e.target.value)}
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
          {props.image ? (
            <CardMedia
              component="img"
              sx={{ width: "40%", height: "auto" }}
              image={props.image}
              alt="exercise"
            />
          ) : (
            "image form here"
          )}
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
                onChange={(e) => setInstructions(e.target.value)}
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
                onChange={(e) => setNotes(e.target.value)}
              />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                startIcon={<SaveSharpIcon />}
                onClick={submitForm}
                sx={{ ml: "auto" }}
              >
                SAVE
              </Button>

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
