import React from "react";

import { Typography, Box } from "@mui/material/";

export default function Dashboard(props) {
  return (
    <>
      <Box className="exercise" component="main" sx={{ flexGrow: 1 }}>
        {/* <Toolbar /> */}
        <Typography variant="h1">This is dashboard page</Typography>
      </Box>
    </>
  );
}
