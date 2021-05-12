// import { useState } from 'react';

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
  // const [ title, setTitle ] = useState("");
  // const [ entry, setEntry ] = useState("");

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" >
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
          value={""}
          />

        <TextField 
          id="outlined-basic" 
          multiline
          rows="15"
          label="Whats on your mind?" 
          variant="outlined" 
          fullWidth/>

        <Button variant="contained" color="primary" onClick={() => console.log("clicked")}>Submit</Button>
      </Box>
    </form>
    
  );
}

