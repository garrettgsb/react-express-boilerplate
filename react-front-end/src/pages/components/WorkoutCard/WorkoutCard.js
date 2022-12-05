import React, { useState } from "react";

import {
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import WorkoutForm from "./WorkoutForm";

//Show a workout card
export default function WorkoutCard(props) {
  //State for editWorkoutMode
  const [editWorkoutMode, setEditWorkoutMode] = useState(false);

  //Set editWorkoutMode to false
  const cancelEdit = () => {
    setEditWorkoutMode(false);
  };

  const navigate = useNavigate();

  //Redirect to workout pages
  const handleNavigate = () => {
    navigate(`/workout/${props.workout.id}`);
  };

  return (
    <>
      {editWorkoutMode ? (
        <WorkoutForm
          edit={editWorkoutMode}
          cancelEdit={cancelEdit}
          workout={props.workout}
          getWorkout={props.getWorkout}
        />
      ) : (
        <>
          <Card className="workoutListItem" onClick={handleNavigate}>
            <Box display="flex">
                <CardMedia
                  component="img"
                  height="140"
                  sx={{ width: "40%", height: "auto" }}
                  image={props.workout.image}
                  alt={props.workout.name}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  width="100%"
                >
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {props.workout.name}
                    </Typography>
                    <Typography gutterBottom variant="body2">
                      Duration : {props.workout.duration}
                    </Typography>
                    <Typography variant="h5" pt={"0.5em"}>
                      Description
                    </Typography>
                    <Typography variant="p">
                      {props.workout.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      size="small"
                      sx={{ ml: "auto" }}
                      onClick={(event) => {
                        event.stopPropagation();
                        setEditWorkoutMode(true);
                      }}
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Box>
            </Box>
          </Card>
        </>
      )}
    </>
  );
}
