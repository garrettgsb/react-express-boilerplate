import React from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';


export default function LinkButtons() {
  const useStyles = makeStyles({
    root: {
      width: 500,
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      >
      <BottomNavigationAction component={Link} to="/search" label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction component={Link} to="/bookings" label="Bookings" icon={<ListIcon />} />
      <BottomNavigationAction component={Link} to="/listings" label="Listings" icon={<ListIcon />} />
      <BottomNavigationAction component={Link} to="/profile" label="Profile" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};