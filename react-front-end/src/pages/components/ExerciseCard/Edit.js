import React, { useState } from "react";

import {
  Box,
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
import { styled } from "@mui/material/styles";

// MOCK DATA
const exercise = {
  id: 1,
  name: "Back Squat",
  image:
    "https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  instructions:
    "Get under the bar, unrack and take a step back. Stay over the safety bars with your feet shoulder-width apart and toes pointing outward slightly. Breathe into your stomach and with your core engaged, slowly lower your body by bending the knees until your quads are parallel to the floor. Keep your chest up and back straight.",
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
  // state and click handler for card expansion
  const [expanded, setExpanded] = useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // State and change handler for NAME
  const [name, setName] = useState("exerc name here");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // State and change handler for SETS
  const [sets, setSets] = useState(3);
  const handleSetsChange = (event) => {
    setSets(event.target.value);
  };

  // State and change handler for REPS
  const [reps, setReps] = useState(10);
  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  // State and change handler for LOAD
  const [load, setLoad] = useState(50);
  const handleLoadChange = (event) => {
    setLoad(event.target.value);
  };

  // State and change handler for REST
  const [rest, setRest] = useState(2);
  const handleRestChange = (event) => {
    setRest(event.target.value);
  };

  // State and change handler for Notes
  const [notes, setNotes] = useState("notes go here");
  const handleNotesChange = (event) => {
    setNotes(event.target.value);
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
          {/* Garbage can button */}
        </CardActions>
        <IconButton aria-label="delete" size="large" color="error">
          <DeleteIcon />
        </IconButton>
      </CardContent>

      {/* Expandable section containing image, instructions and notes */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: "40%", height: "auto" }}
            image="https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="exercise"
          />
          <CardContent>
            <Typography variant="h5">Instructions</Typography>
            <Typography variant="p">{exercise.instructions}</Typography>
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
        </Box>
      </Collapse>
    </Card>
  );
}
