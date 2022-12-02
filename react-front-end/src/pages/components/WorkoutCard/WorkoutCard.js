import React from "react";

import { Card, CardMedia, Typography, CardContent, CardActionArea  } from "@mui/material";
import { useParams, useNavigate, Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

export default function WorkoutCard(props) {


  return (
    <Link to={`/workout/${props.workout.id}`} className={"workoutListItem"}>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.workout.image}
            alt={props.workout.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.workout.name}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Duration : {props.workout.duration}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.workout.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
