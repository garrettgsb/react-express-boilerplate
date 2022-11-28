import React from "react";
import { Card, Item, Stack, Toolbar, Typography } from "@mui/material";


export default function ProgramCard ({program}) {
  return (
    <div>

      <p>{program.name}</p>
      {/* <span>{program.description}</span> */}

    </div>

  )
}