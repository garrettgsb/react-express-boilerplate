import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(.2),
  },
}));


export default function Buttons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => { alert('boop') }}>
        OnlyMaps
      </Button>
      <br />
      <Button color="Secondary" onClick={() => { alert('poop') }}>
        Mapperoni
      </Button>
      <br />
      <Button variant="outlined" disabled>
        T-ANAL
      </Button>
      <br />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        FLOPPY
      </Button>
    </div>
  )
}