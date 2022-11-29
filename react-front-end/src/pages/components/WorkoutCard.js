import React from "react";
import {
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';


export default function WorkoutCard (props) {

  //   // Program navigation click handler
  //   // const onClickProgram = (id) => {
  //   //   navigate(`/program/${id}`);
  //   // };

  // const onClickWorkout = (id) => {
  //   navigate(``)
  // }


  return (

    <Card variant="outlined">
          <Typography variant="h4">{props.workout.name}</Typography>
          <Typography variant="p">{props.workout.description}</Typography>
          <Typography variant="p">{props.workout.duration}</Typography>
          {props.edit ? <DeleteIcon variant="h4" onClick={props.delete}/> : ""}
          <CardMedia
            component="img"
            height="140"
            image={props.workout.image}
            alt={props.workout.name}
          />

    </Card>
  )
}