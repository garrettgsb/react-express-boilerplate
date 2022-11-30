import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EqualizerIcon from "@mui/icons-material/Equalizer";

import {
  Box,
  Drawer,
  CssBaseline,
  List,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Toolbar,
} from "@mui/material";

import Appbar from "./Appbar";

const drawerWidth = 240;


export default function ResponsiveDrawer(props) {
  const { window } = props;
  const params = useParams();

  // Toggling drawer state and menu button click handler
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Expanding list item state and click handler
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };


  const handleEvent = (event) => {
    event.stopPropagation();
  }


  
  const drawerItems = (
    <div>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Link to="/dashboard" className={"programListItem"} >
          <ListItemButton>
            <ListItemIcon>
              <EqualizerIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </Link>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText primary={"Programs"} />

          <Link to={"/program/new"} onClick={(e) => {handleEvent(e)}} >
            <AddIcon />
          </Link>

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* ARRAY OF PROGRAMS */}
            {props.programs.map((program) => (
              <Link to={`/program/${program.id}`} className={"programListItem"}>
                <ListItemButton
                  key={program.id}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={program.name} />
                </ListItemButton>
                </Link>

            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />

      <Appbar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        setMobileOpen={setMobileOpen}
        mobileOpen={mobileOpen}
      />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerItems}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawerItems}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflow: "auto",
          // flex: 1,
          // maxheight: '100%'
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
