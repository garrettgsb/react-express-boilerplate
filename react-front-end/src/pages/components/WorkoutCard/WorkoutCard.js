import React, { useState } from "react";

import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  Button,
} from "@mui/material";
import { useParams, useNavigate, Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import WorkoutForm from "./WorkoutForm";

export default function WorkoutCard(props) {
  const [editWorkoutMode, setEditWorkoutMode] = useState(false);

  const cancelEdit = () => {
    setEditWorkoutMode(false)
  }

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/workout/${props.workout.id}`);
  }

  return (
    <>
      {editWorkoutMode ? (
        <WorkoutForm edit={editWorkoutMode} cancelEdit={cancelEdit}/>
      ) : (
        <>
          <div className="workoutListItem" onClick={handleNavigate}>
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
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={(event) => {
                    event.stopPropagation();
                    setEditWorkoutMode(true);
                  }}
                >
                  Edit
                </Button>
              </CardActionArea>
            </Card>
          </div>
        </>
      )}
    </>
  );
}
