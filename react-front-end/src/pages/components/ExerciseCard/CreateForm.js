import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  Collapse,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  CardActions,
  CardContent,
  TextField,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SaveSharpIcon from "@mui/icons-material/SaveSharp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
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

  // States for NAME field
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  // States for SETS field
  const [sets, setSets] = useState("");
  const [setsError, setSetsError] = useState(false);

  // States for REPS field
  const [reps, setReps] = useState("");
  const [repsError, setRepsError] = useState(false);

  // States for LOAD field
  const [load, setLoad] = useState("");
  const [loadError, setLoadError] = useState(false);

  // States for REST field
  const [rest, setRest] = useState("");
  const [restError, setRestError] = useState(false);

  // State for Instructions
  const [instructions, setInstructions] = useState("");

  // State for Notes
  const [notes, setNotes] = useState("");

  // State for Image URL
  const [imageURL, setImageURL] = useState("");

  const resetAllErrors = () => {
    setNameError(false);
    setSetsError(false);
    setRepsError(false);
    setLoadError(false);
    setRestError(false);
  };

  const submitForm = () => {
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
      workout_id: workoutId,
      name,
      sets,
      reps,
      load,
      rest_period: rest,
      notes,
      instructions,
      image: imageURL,
    };

    // Send request to create
    Axios.post(`/api/exercises`, exerciseData)
      .then((response) => {
        // Build new exercises state with newest at the end
        let newState = [...props.exercises, exerciseData];
        props.setAdding(false);
        // Set new Workout page state to trigger re-render
        props.setExercises(newState);
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
  };

  // state and click handler for card expansion
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
    props.setAdding(false);
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
            helperText={nameError ? nameError : "Name"}
            variant="standard"
            onChange={(e) => setName(e.target.value)}
            value={name}
            sx={{ maxWidth: "80%", overflow: "visible" }}
            error={nameError}
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
              endAdornment: <InputAdornment position="end">min</InputAdornment>,
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
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            width="100%"
          >
            <CardContent>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label={"Instructions"}
                multiline
                fullWidth
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                sx={{ mb: "2rem" }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                label={"Notes"}
                multiline
                fullWidth
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                sx={{ mb: "2rem" }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                label={"Image URL"}
                multiline
                fullWidth
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Link
                        href="https://www.pexels.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Tooltip title="Pexels.com" arrow placement="right">
                          <CameraAltRoundedIcon />
                        </Tooltip>
                      </Link>
                    </InputAdornment>
                  ),
                }}
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
            </CardActions>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
}
