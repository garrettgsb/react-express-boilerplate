import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar className="NavBar">
          <Typography variant="h5" className='AppName'>
            m i n d f u l l
          </Typography>
          <div className="Buttons">
          <Button className="LoginRegister" color="inherit">Login</Button>
          <Button className="LoginRegister" color="inherit">Register</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}