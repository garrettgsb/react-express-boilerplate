import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
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
    description: "Three workouts per week targetting all major muscle groups",
    start_date: "2022-10-01",
    end_date: "2022-11-30",
    public: true,
    author: 'Jason "Chad" Ling',
  },
  {
    id: 3,
    user_id: 1,
    name: "Upper Lower",
    description: "Three workouts per week targetting all major muscle groups",
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
  const params = useParams();
  const [program, setProgram] = useState({})

  useEffect(()=>{
  //we need to filter the program first. 
  const result = Programs.find((item) => {
    if(item.id == params.id){
      return item
    }
  })
  //we find the right item and set program with that.
  setProgram(result)
  }, [params.id])
  //everytime [params.id] changes, the code inside of useEffect will run. 

  return (
    <>
      {/* <Toolbar /> */}
      <span>{`This is Program page for program ${params.id}`} </span>
      {/* <Typography variant="h3" gutterBottom>
        This is Program page
      </Typography> */}
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        {/* Array of Workout Cards - to be made into separate component */}

        {
          program ? <ProgramCard key={program.id} program={program} /> : null
        }

        {/* <Card variant="outlined">
          <Typography variant="h4">{workout.name}</Typography>
          <Typography variant="p">{workout.description}</Typography>
        </Card>
        <Card variant="outlined">
          <Typography variant="h4">{workout.name}</Typography>
          <Typography variant="p">{workout.description}</Typography>
        </Card> */}
      </Stack>
    </>
  );
}
