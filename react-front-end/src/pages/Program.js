import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import WorkoutCard from "./components/WorkoutCard/WorkoutCard";
import { Button, Fab } from "@mui/material";
import ProgramCard from "./components/ProgramCard/ProgramCard";
import { usePrograms } from "../App";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Confirmation from "./components/Confirmation";
import WorkoutForm from "./components/WorkoutCard/WorkoutForm";

export default function Program() {
  const { getAndSetPrograms } = usePrograms();
  const params = useParams();
  const navigate = useNavigate();

  // const [programs, setPrograms] = useState([]);
  const [program, setProgram] = useState({});
  const [workout, setWorkout] = useState([]);
  const [programEditMode, setProgramEditMode] = useState(false);
  const [workoutCreateMode, setWorkoutCreateMode] = useState(false);
  const [deleteProgram, setDeleteProgram] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleDelete = () => {
    setDeleteProgram(true);
    handleConfirmOpen();
  };

  const programId = params.id;

  useEffect(() => {
    getProgram();
    getWorkout();
  }, [programId]);

  const getProgram = () => {
    axios
      .get(`/api/programs/${programId}`)
      .then((result) => {
        setProgram(result.data.program || {});
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getWorkout = () => {
    axios
      .get(`/api/workouts/programs/${programId}`)
      .then((result) => {
        setWorkout(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
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

  // const handleEditMode = () => {
  //   setEditMode(false);
  // };

  const handleProgramEditMode = () => {
    setProgramEditMode(false);
  };

  const handleWorkoutEditMode = () => {
    setWorkoutCreateMode(true);
  };

  const cancelWorkoutCreateMode = () => {
    setWorkoutCreateMode(false);
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
            setProgram={setProgram}
            edit={programEditMode}
            handleEditMode={handleProgramEditMode}
            getProgram={getProgram}
          />
        ) : null}

        {programEditMode ? (
          <>
            {/* <Button variant="contained" onClick={saveProgram}>
              Save
            </Button> */}
            <DeleteIcon onClick={handleDelete} />
          </>
        ) : (
          <Button variant="contained" onClick={() => setProgramEditMode(true)}>
            Edit
          </Button>
        )}

        {deleteProgram ? (
          <Confirmation
            confirmOpen={confirmOpen}
            setConfirmOpen={setConfirmOpen}
            confirmDelete={confirmDeleteProgram}
            resource={"program"}
          />
        ) : null}

        {/* Array of Workout Cards - to be made into separate component */}
        {workout.map((item) => {
          return workout ? (
            <WorkoutCard key={item.id} workout={item} getWorkout={getWorkout} />
          ) : null;
        })}

        {workoutCreateMode ? (
          <WorkoutForm
            create={workoutCreateMode}
            cancelCreate={cancelWorkoutCreateMode}
            key={"create"}
            programId={programId}
            getWorkout={getWorkout}
          />
        ) : (
          <Fab
            color="primary"
            aria-label="add"
            sx={{ alignSelf: "center" }}
            size="medium"
          >
            <AddIcon onClick={handleWorkoutEditMode} />
          </Fab>
        )}
      </Stack>
    </>
  );
}
