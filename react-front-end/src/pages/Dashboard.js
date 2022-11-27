import React from 'react';

import {Typography, Toolbar, Box } from '@mui/material/'

export default function Dashboard(props) {
  return (
      <>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography paragraph>
            This is Dashboard.
          </Typography>
        </Box>
      </>
  )
}