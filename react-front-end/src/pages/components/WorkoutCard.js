import React from "react";
import {
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';


export default function WorkoutCard ({workout, edit}) {
  const params = useParams();
  const navigate = useNavigate();

  //   // Program navigation click handler
  //   // const onClickProgram = (id) => {
  //   //   navigate(`/program/${id}`);
  //   // };

  // const onClickWorkout = (id) => {
  //   navigate(``)
  // }


  return (

    <Card variant="outlined">
          <Typography variant="h4">{workout.name}</Typography>
          <Typography variant="p">{workout.description}</Typography>
          <Typography variant="p">{workout.duration}</Typography>
          {edit ? <DeleteIcon variant="h4"/> : ""}
          <CardMedia
            component="img"
            height="140"
            image={workout.image}
            alt={workout.name}
          />

    </Card>
  )
}