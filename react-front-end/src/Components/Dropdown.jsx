import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import EcoIcon from '@material-ui/icons/Eco';
import BuildIcon from '@material-ui/icons/Build';
import AddIcon from '@material-ui/icons/Add';
import RoomIcon from '@material-ui/icons/Room';
import SettingsIcon from '@material-ui/icons/Settings'
import './Dropdown.scss';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className="main"
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Nested List Items
      //   </ListSubheader>
      // }
    >
      <ListItem button>
        <ListItemIcon>
          <AddIcon className="icon"/>
        </ListItemIcon>
        <NavLink className="a" to="/planning">
          <ListItemText primary="Build New Plot" />
        </NavLink>
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <RoomIcon className="icon"/>
        </ListItemIcon>
        <ListItemText primary="My Plots" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {/* Map over elements in this collapse button */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className="nested">
            <ListItemIcon>
              <StarBorder className="icon"/>
            </ListItemIcon>
            <ListItemText primary="Plot 1" />
          </ListItem>
        </List>
      </Collapse>
      {/* collapse ends here! */}

      <ListItem button>
        <ListItemIcon>
          <EcoIcon className="icon"/>
        </ListItemIcon>
        <Link to="/vegetables">
          <ListItemText primary="Vegetables" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BuildIcon className="icon"/>
        </ListItemIcon>
        <Link to="/tasks">
          <ListItemText primary="Maintenance" />
        </Link>
      </ListItem>

      <Divider />

      <ListItem button>
        <ListItemIcon>
          <EcoIcon className="icon"/>
        </ListItemIcon>
        <Link to="/vegetables">
          <ListItemText primary="About" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BuildIcon className="icon"/>
        </ListItemIcon>
        <Link to="/tasks">
          <ListItemText primary="Resources" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon className="icon"/>
        </ListItemIcon>
        <Link to="/tasks">
          <ListItemText primary="Settings" />
        </Link>
      </ListItem>
    </List>
    
  );
}