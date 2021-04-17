import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5), url('https://images.unsplash.com/photo-1578409760928-91924170cb81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'))`
  }
}))

export default function Home() {
  const classes = useStyles();
  return (
    <div className="Home">
      <Box className={classes.hero}>
        <h1>Home</h1>
      </Box>
    </div>
  );
}
