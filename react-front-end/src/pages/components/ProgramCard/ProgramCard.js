import React, { useEffect, useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { usePrograms } from "../../../App";
import AddProgram from "./AddProgram";
import ProgramForm from "./ProgramForm";
import Program from "../../Program";

export default function ProgramCard(props) {
  const { getAndSetPrograms } = usePrograms();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();


  //if it has value & one of the dependency is changed, it sets data. 
  useEffect(() => {
    if (props.program.name) {
      setName(props.program.name);
    }

    if (props.program.description) {
      setDescription(props.program.description);
    }

    if (props.program.start_date) {
      setStartDate(props.program.start_date.substring(0, 10));
    }

    if (props.program.end_date) {
      setEndDate(props.program.end_date.substring(0, 10));
    }
  }, [
    props.program.name,
    props.program.description,
    props.program.start_date,
    props.program.end_date,
  ]);


  const editProgram = () => {
    const requestData = {
      name,
      description,
      start_date: startDate,
      end_date: endDate,
      user_id: 1,
    };

      axios.put(`/api/programs/${props.program.id}`, requestData)
      .then(() => {
        getAndSetPrograms();
      })
      .catch((e) => {
        console.log(e)
      })

      props.handleEditMode();
  };

  const handleCancel = () => {
    props.handleEditMode();
  };

  const nameCallback = (event) => {
    setName(event.target.value);
  };

  const descriptionCallback = (event) => {
    setDescription(event.target.value);
  };

  const startDateCallback = (value) => {
    setStartDate(value);
  };

  const endDateCallback = (value) => {
    setEndDate(value);
  };

  return (
    <>
      {props.edit ? (
        <ProgramForm
          name={name}
          nameCallback={nameCallback}
          description={description}
          descriptionCallback={descriptionCallback}
          startDate={startDate}
          startDateCallback={startDateCallback}
          endDate={endDate}
          endDateCallback={endDateCallback}
          cancel={handleCancel}
          save={editProgram}
        />
      ) : (
        <>
          <p>Program name : {props.program.name}</p>
          <p>Note : {props.program.description}</p>
          <p>
            Start date :{" "}
            {props.program.start_date
              ? props.program.start_date.substring(0, 10)
              : ""}
          </p>
          <p>
            End date :{" "}
            {props.program.end_date
              ? props.program.end_date.substring(0, 10)
              : ""}
          </p>
        </>
      )}
    </>
  );
}
