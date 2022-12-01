import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import axios from "axios";
import { usePrograms } from "../../../App";

export default function ProgramCard(props) {

  const { getAndSetPrograms } = usePrograms();

  const handleOnChange = (event) => {
    props.setProgram([{ ...props.program, name: event.target.value }]);
  };

  // const saveEditedProgram = () => {
  //   axios.put(`/api/programs/${}`)
  //   .then(() => {
  //     getAndSetPrograms();
  //   })
  // }

  return (
    <>
      {props.edit ? (



        <TextField
          id="standard-basic"
          label="Program name"
          variant="standard"
          name="name"
          type="text"
          placeholder={props.program.name}
          value={props.program.name}
          onChange={handleOnChange}
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
