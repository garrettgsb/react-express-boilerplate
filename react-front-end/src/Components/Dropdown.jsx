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
import useAppData from "../hooks/useAppData";
import './Dropdown.scss';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const { state } = useAppData();

  const handleClick = () => {
    setOpen(!open);
  };

  const redirect = function (id) {
    window.location.replace(`http://localhost:3000/tasks/${id}`)
  }

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
      <NavLink className="a" to="/planning">
        <ListItem button>
          <ListItemIcon>
            <AddIcon className="icon"/>
          </ListItemIcon>
            <ListItemText primary="Build New Plot" />
          </ListItem>
        </NavLink>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <RoomIcon className="icon"/>
        </ListItemIcon>
        <ListItemText primary="My Plots" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {/* Map over plots to link all plots */}
      <Collapse in={!open} timeout="auto" unmountOnExit>
        {state.plots.map(x => 
        <List component="div" disablePadding>
          <ListItem button onClick={() => redirect(x.id)}  className="nested">
            <ListItemIcon>
              <StarBorder className="icon"/>
            </ListItemIcon>
              <ListItemText primary={`Plot ${x.id}`} />
          </ListItem>
        </List>
        )}
      </Collapse>
      {/* Map ends here! */}
      <Link to="/vegetables">
        <ListItem button>
          <ListItemIcon>
            <EcoIcon className="icon"/>
          </ListItemIcon>
          <ListItemText primary="Vegetables" />
        </ListItem> 
        </Link>
      <Divider />

      <Link to="/vegetables">
        <ListItem button>
          <ListItemIcon>
            <EcoIcon className="icon"/>
          </ListItemIcon>
            <ListItemText primary="About" />
        </ListItem>
      </Link>
      <Link to="/vegetables">
        <ListItem button>
          <ListItemIcon>
            <BuildIcon className="icon"/>
          </ListItemIcon>
            <ListItemText primary="Resources" />
        </ListItem>
      </Link>
      <Link to="/vegetables">
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon className="icon"/>
          </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
      </Link>
    </List>
  );
}