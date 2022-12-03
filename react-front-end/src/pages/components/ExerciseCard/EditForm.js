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
  Tooltip,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveSharpIcon from "@mui/icons-material/SaveSharp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { styled } from "@mui/material/styles";
import Axios from "axios";
import Confirmation from "../Confirmation";

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
  const [nameError, setNameError] = useState(false);

  // State for SETS
  const [sets, setSets] = useState(props.sets || "");
  const [setsError, setSetsError] = useState(false);

  // State for REPS
  const [reps, setReps] = useState(props.reps || "");
  const [repsError, setRepsError] = useState(false);

  // State for LOAD
  const [load, setLoad] = useState(props.load || "");
  const [loadError, setLoadError] = useState(false);

  // State for REST
  const [rest, setRest] = useState(props.rest_period || "");
  const [restError, setRestError] = useState(false);

  // State for Instructions
  const [instructions, setInstructions] = useState(props.instructions || "");

  // State for Notes
  const [notes, setNotes] = useState(props.notes || "");

  // State for deletion confirmation dialog
  const [confirmOpen, setConfirmOpen] = useState(false);

  const resetAllErrors = () => {
    setNameError(false);
    setSetsError(false);
    setRepsError(false);
    setLoadError(false);
    setRestError(false);
  };

  const navigate = useNavigate();
  const submitEditForm = () => {
    resetAllErrors();
    if (!name) {
      setNameError("Name - required");
    }
    if (!sets) {
      setSetsError("SETS - required");
    }
    if (!reps) {
      setRepsError("REPS - required");
    }
    if (!load) {
      setLoadError("lbs - required");
    }
    if (!rest) {
      setRestError("REST - required");
    }
    if (!name || !sets || !reps || !load || !rest) {
      return;
    }

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
        // Refresh current page
        navigate(0);
      })
      .catch((e) => console.log(e));
  };

  // state and click handler for card expansion
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    if (props.edit) {
      props.setEdit(false);
    }
    setExpanded(!expanded);
  };

  return (
    <>
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
              helperText={nameError ? nameError : "Name"}
              variant="standard"
              onChange={(e) => setName(e.target.value)}
              value={name}
              error={nameError}
              sx={{ maxWidth: "80%" }}
            />
          </ExerciseAttribute>
          <Divider orientation="vertical" variant="middle" flexItem />
          <ExerciseAttribute>
            <TextField
              id="standard-number"
              helperText={setsError ? setsError : "SETS"}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              onChange={(e) => setSets(e.target.value)}
              value={sets}
              sx={{ maxWidth: "30%" }}
              inputProps={{ min: 1 }}
              error={setsError}
            />
          </ExerciseAttribute>
          <Divider orientation="vertical" variant="middle" flexItem />
          <ExerciseAttribute>
            <TextField
              id="standard-number"
              helperText={repsError ? repsError : "REPS"}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              onChange={(e) => setReps(e.target.value)}
              value={reps}
              sx={{ maxWidth: "50%" }}
              inputProps={{ min: 1 }}
              error={repsError}
            />
          </ExerciseAttribute>
          <Divider orientation="vertical" variant="middle" flexItem />
          <ExerciseAttribute>
            <TextField
              id="standard-number"
              helperText={loadError ? loadError : "lbs"}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              onChange={(e) => setLoad(e.target.value)}
              value={load}
              sx={{ maxWidth: "50%" }}
              inputProps={{ step: 5, min: 0 }}
              error={loadError}
            />
          </ExerciseAttribute>
          <Divider orientation="vertical" variant="middle" flexItem />
          <ExerciseAttribute>
            <TextField
              id="standard-number"
              helperText={restError ? restError : "REST"}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              onChange={(e) => setRest(e.target.value)}
              value={rest}
              sx={{ maxWidth: "50%" }}
              inputProps={{ min: 0 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">min</InputAdornment>
                ),
              }}
              error={restError}
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
              {props.edit ? (
                <Tooltip title="Cancel" arrow placement="right">
                  <CloseRoundedIcon />
                </Tooltip>
              ) : (
                <ExpandMoreIcon />
              )}
            </ExpandMore>
          </CardActions>
        </CardContent>

        {/* Expandable section containing image, instructions and notes */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box display="flex">
            {props.image && (
              <CardMedia
                component="img"
                sx={{ width: "40%", height: "auto" }}
                image={props.image}
                alt="exercise"
              />
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
                  onClick={submitEditForm}
                  sx={{ ml: "auto" }}
                >
                  SAVE
                </Button>

                {/* Garbage can button */}
                <IconButton
                  aria-label="delete"
                  size="large"
                  color="error"
                  // onClick={deleteExercise}
                  onClick={() => setConfirmOpen(true)}
                >
                  <DeleteIcon />
                </IconButton>
                {confirmOpen && (
                  <Confirmation
                    confirmOpen={confirmOpen}
                    setConfirmOpen={setConfirmOpen}
                    confirmDelete={deleteExercise}
                    resource={"exercise"}
                  />
                )}
              </CardActions>
            </Box>
          </Box>
        </Collapse>
      </Card>
    </>
  );
}
