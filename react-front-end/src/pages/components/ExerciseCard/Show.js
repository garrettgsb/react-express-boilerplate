import React, { useState } from "react";

import {
  Box,
  Button,
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
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { styled } from "@mui/material/styles";

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
        <ExerciseAttribute sx={{ width: "15%" }}>
          <Typography variant="h5">{props.name}</Typography>
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <Typography variant="h5">{props.sets}</Typography>
          <Typography variant="p">SETS</Typography>
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <Typography variant="h5">{props.reps}</Typography>
          <Typography variant="p">REPS</Typography>
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <Typography variant="h5">{props.load}</Typography>
          <Typography variant="p">lbs</Typography>
        </ExerciseAttribute>
        <Divider orientation="vertical" variant="middle" flexItem />
        <ExerciseAttribute>
          <Typography variant="h5">{props.rest_period} min</Typography>
          <Typography variant="p">REST</Typography>
        </ExerciseAttribute>
        {/* Expand/collapse card chevron \/ */}
        <CardActions>
          <ExpandMore
            expand={expanded}
            onClick={() => setExpanded(!expanded)}
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
              <Typography variant="p">{props.instructions}</Typography>
              <Typography variant="h5" pt={"0.5em"}>
                Notes
              </Typography>
              <Typography variant="p">{props.notes}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              {!props.edit && (
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<EditSharpIcon />}
                  onClick={() => props.setEdit(!props.edit)}
                  sx={{ ml: "auto" }}
                >
                  Edit
                </Button>
              )}
            </CardActions>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
}
