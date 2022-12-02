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

  const [editMode, setEditMode] = useState(false);
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
  }, [program]);

  const saveProgram = () => {
    const indexOfProgram = programs.findIndex((item) => {
      return item.id === program.id;
    });

    const ProgramsDefaultCopy = [...programs];
    ProgramsDefaultCopy[indexOfProgram] = program;

    setPrograms(ProgramsDefaultCopy);
    setEditMode(false);
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

  const handleEditMode = () => {
    setEditMode(false)
  }



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
            setProgram={setProgram}
            edit={editMode}
            handleEditMode={handleEditMode}
          />
        ) : null}

        {editMode ? (
          <>
            {/* <Button variant="contained" onClick={saveProgram}>
              Save
            </Button> */}
            <DeleteIcon onClick={handleDelete} />
          </>
        ) : (
          <Button variant="contained" onClick={() => setEditMode(true)}>
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
