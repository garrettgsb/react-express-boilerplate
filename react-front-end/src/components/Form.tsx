// import { useState } from 'react';
import useEntryData from '../hooks/useEntryData';

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

  { titleData, entryData } = useEntryData();
  // console.log("title", title);

  const classes = useStyles();
 

  return (
    <form id="entry_form" className={classes.root} noValidate autoComplete="off" >
      <Box
        width="100%"
        display="flex" 
        flexDirection="column"
        bgcolor="background.paper">

        <TextField 
          id="outlined-basic" 
          // form="entry_form"
          margin="normal"
          label="Title" 
          variant="outlined" 
          value={title}
          onChange={event => setTitle(event.target.value)}
          fullWidth

          />

        <TextField 
          id="outlined-basic" 
          // form="entry_form"
          multiline
          rows="15"
          label="Whats on your mind?" 
          variant="outlined" 
          value={entry}
          onChange={event => setEntry(event.target.value)}
          fullWidth/>

        <Button 
        variant="contained" 
        color="primary"
        onClick={() => {}}>
          Submit
        </Button>
      </Box>
    </form>
    
  );
}

