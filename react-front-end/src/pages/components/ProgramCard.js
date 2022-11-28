import React from "react";

export default function ProgramCard ({program, edit}) {


  
  return (
    <div>

      {edit ?

        <input value={program.name}/> :

        <p>{program.name}</p>}

    </div>
  )
}