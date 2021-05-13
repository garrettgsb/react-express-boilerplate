// import { useState } from 'react';
import useEntryData from '../hooks/useEntryData'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 300,
    padding: '0 30px',
    margin: theme.spacing(1),
  }
}));

export default function Form() {

  const classes = useStyles();

  const { entryData, titleData, submitEntry } = useEntryData();

  function submitHandler(event) {
    event.preventDefault();
    console.log("form was submitted");
    submitEntry();
  }
 
  return (
    <form id="entry_form" className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
      <Box
        width="100%"
        display="flex" 
        flexDirection="column"
        bgcolor="background.paper">

        <TextField 
          id="outlined-basic" 
          margin="normal"
          label="Title" 
          variant="outlined" 
          fullWidth
          onInput={e => titleData((e.target as any).value)}
          />

        <TextField 
          id="outlined-basic" 
          multiline
          rows="15"
          label="Whats on your mind?" 
          variant="outlined" 
          fullWidth
          onInput={e => entryData((e.target as any).value)}
          />

        <Button 
        variant="contained" 
        color="primary"
        type="submit"/>
      </Box>
    </form>
    
  );
}

