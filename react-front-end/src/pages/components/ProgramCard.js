import React, { useState } from "react";

export default function ProgramCard(props) {
  const handleOnChange = (event) => {
    props.setProgram([{ ...props.program, name: event.target.value }]);
  };

  console.log("program data", props.program.name)
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
        <p>{props.program.name}</p>
      )}
    </div>
  );
}
