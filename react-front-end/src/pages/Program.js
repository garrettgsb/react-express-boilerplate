import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import WorkoutCard from "./components/WorkoutCard";
import { Button } from "@mui/material";
import ProgramCard from "./components/ProgramCard";
import { usePrograms } from "../App";
import axios from "axios";

export default function Program() {
  const { getAndSetPrograms } = usePrograms();
  const params = useParams();

  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState({});
  const [workout, setWorkout] = useState([]);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const programId = params.id;

    axios
      .get(`/api/programs/${programId}`)
      .then((result) => {
        setProgram(result.data.program || {});
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get(`/api/workouts/programs/${programId}`)
      .then((result) => {
        setWorkout(result.data);
      })
      .catch((e) => {
        console.log(e);
      });

    // const findProgram = programs.find((item) => {
    //   if (item.id == params.id) {
    //     return item;
    //   }
    // });

    // const findWorkout = Workouts.filter((workout) => {
    //   return workout.program_id == params.id;
    // });

    // setProgram(findProgram);
    // setWorkout(findWorkout);
  }, [params.id]);

  const saveProgram = () => {
    const indexOfProgram = programs.findIndex((item) => {
      return item.id === program.id;
    });

    const ProgramsDefaultCopy = [...programs];
    ProgramsDefaultCopy[indexOfProgram] = program;

    setPrograms(ProgramsDefaultCopy);
    setEdit(false);
  };

  const deleteWorkout = () => {
    //axios.delete.then(() => getAndSetPrograms()))
    console.log("delete is clicked!!");
  };

  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        {program ? (
          <ProgramCard program={program} edit={edit} setProgram={setProgram} />
        ) : null}

        {edit ? (
          <Button variant="contained" onClick={saveProgram}>
            Save
          </Button>
        ) : (
          <Button variant="contained" onClick={() => setEdit(true)}>
            Edit
          </Button>
        )}

        {/* Array of Workout Cards - to be made into separate component */}
        {workout.map((item) => {
          return workout ? (
            <WorkoutCard
              key={item.id}
              workout={item}
              edit={edit}
              delete={deleteWorkout}
            />
          ) : null;
        })}
      </Stack>
    </>
  );
}
