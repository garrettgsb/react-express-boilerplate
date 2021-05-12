import { useState } from 'react';
// import useEntryData from '../hooks/useEntryData';

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

  // { titleData, entryData } = useEntryData();

  const [ title, setTitle ] = useState("");
  const [ entry, setEntry ] = useState("");

  const classes = useStyles();

  function submitHandler(event) {
    event.preventDefault();
    // console.log("form was submitted");
    console.log(title);
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
          // form="entry_form"
          margin="normal"
          label="Title" 
          variant="outlined" 
          fullWidth
          value={title}
          onInput={e => setTitle((e.target as any).value)}
          />

        <TextField 
          id="outlined-basic" 
          // form="entry_form"
          multiline
          rows="15"
          label="Whats on your mind?" 
          variant="outlined" 
          fullWidth
          value={entry}
          onInput={e => setEntry((e.target as any).value)}

          />

        <Button 
        variant="contained" 
        color="primary"
        type="submit"/>
      </Box>
    </form>
    
  );
}

