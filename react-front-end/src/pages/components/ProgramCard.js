import React, { useState } from "react";

export default function ProgramCard(props) {
  const handleOnChange = (event) => {
    props.setProgram([{ ...props.program, name: event.target.value }]);
  };

  // console.log("program data", props.program.name);
  // console.log("program card !!!!", props.program[0].name)
  return (
    <div>
      {props.edit ? (
        <input
          name="name"
          type="text"
          placeholder={props.program.name}
          value={props.name}
          onChange={handleOnChange}
        />
      ) : (
        <>
          <p>Program name : {props.program.name}</p>
          <p>Note : {props.program.description}</p>
          <p>Start date : {props.program.start_date ? props.program.start_date.substring(0,10) : ""}</p>
          <p>End date : {props.program.end_date ? props.program.end_date.substring(0,10) : ""}</p>
        </>
      )}
    </div>
  );
}
