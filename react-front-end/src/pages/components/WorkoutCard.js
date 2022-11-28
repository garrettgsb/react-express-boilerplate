import React from "react";
import {
  Card,
  CardMedia,
  Typography,
} from "@mui/material";

export default function WorkoutCard ({workout}) {

  console.log("workoutname", workout.name)
  console.log("workout", workout)

  return (

    <Card variant="outlined">
          <Typography variant="h4">{workout.name}</Typography>
          <Typography variant="p">{workout.description}</Typography>
          <Typography variant="p">{workout.duration}</Typography>
          <CardMedia
            component="img"
            height="140"
            image={workout.image}
            alt={workout.name}
    />
    </Card>
  )
}