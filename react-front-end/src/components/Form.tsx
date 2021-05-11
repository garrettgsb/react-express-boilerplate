// import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 300,
    padding: '0 30px',
  }
}));

export default function Form() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <Box
        height={300}
        width="100%"
        display="flex" 
        flexDirection="column"
        bgcolor="background.paper">
        <TextField 
          id="outlined-basic" 
          margin="normal"
          label="Title" 
          variant="outlined" 
          fullWidth/>
        <TextField 
          id="outlined-basic" 
          multiline
          rows="10"
          label="Whats on your mind?" 
          variant="outlined" 
          fullWidth/>
      </Box>
    </form>
    
  );
}

