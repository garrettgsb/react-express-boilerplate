import React, { useState } from "react";

import {
  Box,
  Card,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      {/* Initially visible info: exercise name, attributes and expand button */}
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ExerciseAttribute>
          <Typography variant="h5">{exercise.name}</Typography>
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <Typography variant="h5">{exerciseAttributes.sets}</Typography>
          <Typography variant="p">SETS</Typography>
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <Typography variant="h5">{exerciseAttributes.reps}</Typography>
          <Typography variant="p">REPS</Typography>
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <Typography variant="h5">{exerciseAttributes.load}</Typography>
          <Typography variant="p">lbs</Typography>
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <Typography variant="h5">
            {exerciseAttributes.rest_period} min
          </Typography>
          <Typography variant="p">REST</Typography>
        </ExerciseAttribute>
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
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: "40%", height: 225 }}
            image="https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="exercise"
          />
          <CardContent>
            <Typography variant="h5">Instructions</Typography>
            <Typography variant="p">{exercise.instructions}</Typography>
            <Typography variant="h5" pt={"0.5em"}>
              Notes
            </Typography>
            <Typography variant="p">{exerciseAttributes.notes}</Typography>
          </CardContent>
        </Box>
      </Collapse>
    </Card>
  );
}
