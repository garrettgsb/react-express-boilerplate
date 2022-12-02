import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import WorkoutCard from "./components/WorkoutCard";
import { Button } from "@mui/material";
import ProgramCard from "./components/ProgramCard/ProgramCard";
import { usePrograms } from "../App";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import Confirm from "./components/ProgramCard/Confirm";

export default function Program() {
  const { getAndSetPrograms } = usePrograms();
  const params = useParams();
  const navigate = useNavigate();

  const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState({});
  const [workout, setWorkout] = useState([]);

  const [editProgram, setProgramEdit] = useState(false);
  const [deleteProgram, setDeleteProgram] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleClickOpen = () => {
    setConfirmOpen(true);
  };

  const handleDelete = () => {
    setDeleteProgram(true);
    handleClickOpen();
  };

  const programId = params.id;

  useEffect(() => {
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
  }, [params.id]);

  const saveProgram = () => {
    const indexOfProgram = programs.findIndex((item) => {
      return item.id === program.id;
    });

    const ProgramsDefaultCopy = [...programs];
    ProgramsDefaultCopy[indexOfProgram] = program;

    setPrograms(ProgramsDefaultCopy);
    setProgramEdit(false);
  };


  const confirmDeleteProgram = () => {
    axios
      .delete(`/api/programs/${programId}`)
      .then(() => {
        getAndSetPrograms();
        navigate("/dashboard");
      })
      .catch((e) => console.log(e));
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
          <ProgramCard
            program={program}
            edit={editProgram}
            setProgram={setProgram}
          />
        ) : null}

        {editProgram ? (
          <>
            {/* <Button variant="contained" onClick={saveProgram}>
              Save
            </Button> */}
            <DeleteIcon onClick={handleDelete} />
          </>
        ) : (
          <Button variant="contained" onClick={() => setProgramEdit(true)}>
            Edit
          </Button>
        )}

        {deleteProgram ? (
          <Confirm
            confirmOpen={confirmOpen}
            setConfirmOpen={setConfirmOpen}
            confirmDeleteProgram={confirmDeleteProgram}
          />
        ) : (
          ""
        )}

        {/* Array of Workout Cards - to be made into separate component */}
        {workout.map((item) => {
          return workout ? <WorkoutCard key={item.id} workout={item} /> : null;
        })}
      </Stack>
    </>
  );
}
