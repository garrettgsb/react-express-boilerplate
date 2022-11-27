import React from "react";
import { Card, Item, Stack, Toolbar, Typography } from "@mui/material";

// MOCK DATA
const program = {
  id: 1,
  user_id: 1,
  name: "Full Body",
  description: "Three workouts per week targetting all major muscle groups",
  start_date: "2022-10-01",
  end_date: "2022-11-30",
  public: true,
  author: 'Jason "Chad" Ling',
};

const workout = {
  id: 1,
  program_id: 1,
  name: "Monday",
  image:
    "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "First full body workout of the week, to start off strong.",
  duration: 120,
};

export default function Program() {
  return (
    <>
      <Toolbar />
      <Typography variant="h3" gutterBottom>
        This is Program page
      </Typography>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        {/* Array of Workout Cards - to be made into separate component */}
        <Card variant="outlined">
          <Typography variant="h4">{workout.name}</Typography>
          <Typography variant="p">{workout.description}</Typography>
        </Card>
        <Card variant="outlined">
          <Typography variant="h4">{workout.name}</Typography>
          <Typography variant="p">{workout.description}</Typography>
        </Card>
      </Stack>
    </>
  );
}
