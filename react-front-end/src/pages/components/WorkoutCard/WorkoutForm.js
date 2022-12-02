import React from "react";
import Card from "@mui/material/Card";
import { Button, Box, TextField } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function WorkoutForm() {
  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          name="Workout name"
          type="text"
          placeholder="Enter Workout Title"
          multiline
          // value={props.name}
          // onChange={props.nameCallback}
        />

        <TextField
          id="standard-basic"
          label="Duration"
          variant="standard"
          name="Workout duration"
          type="text"
          placeholder="Enter Workout duration"
          // value={props.name}
          // onChange={props.nameCallback}
        />

        <TextField
          id="standard-basic"
          label="URL"
          variant="standard"
          name="Workout URL"
          type="text"
          placeholder="Enter Workout URL"
          multiline
          // value={props.name}
          // onChange={props.nameCallback}
        />
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          name="Workout description"
          type="text"
          placeholder="Enter Workout Description"
          multiline
          // value={props.name}
          // onChange={props.nameCallback}
        />

        <Box sx={{ "& button": { m: 1 } }}>
          <Button color="secondary" size="small">
            Cancel
          </Button>

          <Button
            variant="contained"
            color="success"
            size="small"
            // onClick={props.save}
          >
            Save
          </Button>
        </Box>
      </Card>
    </>
  );
}
