import React from 'react';
import "./Exercise.css";

import {Typography, Toolbar, Box } from '@mui/material/'

export default function Dashboard(props) {
  return (
      <>
        <Box className='exercise' component="main" sx={{ flexGrow: 1}}>
          {/* <Toolbar /> */}
          <h1>This is dashboard page</h1>
        </Box>
      </>
  )
}