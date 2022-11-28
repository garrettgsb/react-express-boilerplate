import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import WorkoutCard from "./components/WorkoutCard";
import {Button} from "@mui/material";
import ProgramCard from "./components/ProgramCard";

//Mockdata
const Programs = [
  {
    id: 1,
    user_id: 1,
    name: "Full Body",
    description: "Three workouts per week targetting all major muscle groups",
    start_date: "2022-10-01",
    end_date: "2022-11-30",
    public: true,
    author: 'Jason "Chad" Ling',
  },
  {
    id: 2,
    user_id: 1,
    name: "Bro Split",
    description: "2 workouts per week targetting bro split",
    start_date: "2022-10-01",
    end_date: "2022-11-30",
    public: true,
    author: 'Jason "Chad" Ling',
  },
  {
    id: 3,
    user_id: 1,
    name: "Upper Lower",
    description: "1 workouts per week targetting upper lower",
    start_date: "2022-10-01",
    end_date: "2022-11-30",
    public: true,
    author: 'Jason "Chad" Ling',
  },
];

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

const Workouts = [
  {
  id: 1,
  program_id: 1,
  name: "Monday",
  image:
    "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "First full body workout of the week, to start off strong.",
  duration: 150,
  },
  {
    id: 2,
    program_id: 1,
    name: "Tuesday",
    image:
      "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Second full body workout of the week, to start off strong.",
    duration: 150,
  },
  {
    id: 3,
    program_id: 3,
    name: "Friday",
    image:
      "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Friday workout!!! let's go!!!!!!",
    duration: 150,
  }
];

export default function Program() {
  const params = useParams();
  const [program, setProgram] = useState({});
  const [workout, setWorkout] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(()=>{

  const findProgram = Programs.find((item) => {
    if(item.id == params.id){
      return item
    }
  })

  const findWorkout = Workouts.filter(workout => {
    return workout.program_id == params.id
  })

  setProgram(findProgram)
  setWorkout(findWorkout)

  }, [params.id])



  return (
    <>

      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >

        {
          program ? <ProgramCard program={program} edit={edit}/> : null
        }

        {edit ? 
          <Button variant="contained" onClick={() => setEdit(false)}>Save</Button> :
          <Button variant="contained" onClick={() => setEdit(true)}>Edit</Button> 
          }

        {/* Array of Workout Cards - to be made into separate component */}
        {
          workout.map(item => {
            return (
              workout ? <WorkoutCard key={item.id} workout={item} edit={edit}/> : null
            )
          })
        }

      </Stack>
    </>
  );
}
