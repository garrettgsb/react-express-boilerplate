import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@mui/material';

const useStyles = makeStyles((theme) => ({

root: {
  minHeight: '100vh',
  backgroundImage:`url(${process.env.PUBLIC_URL + "/assets/tempPG.jpeg"})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
},
}));

export default function App() {

// const classes = useStyles();

return (

<div className={classes.root}>
  <CssBaseline/>
  Test
</div>
); 
}