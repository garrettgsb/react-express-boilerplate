import React from "react";
import { Card, Item, Stack, Toolbar, Typography } from "@mui/material";


export default function ProgramCard ({program}) {
  return (
    <Card variant="outlined">
      <Typography variant="h4">{program.name}</Typography>
      <Typography variant="p">{program.description}</Typography>
    </Card>

  )
}