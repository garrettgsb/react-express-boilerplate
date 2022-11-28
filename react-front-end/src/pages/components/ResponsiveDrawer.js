import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import {
  Avatar,
  Button,
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  IconButton,
  Typography,
  Divider,
  ListItemButton,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;

// MOCK DATA
const NavbarData = [
  {
    title: "Dashboard",
    // icon: <InsightsIcon/>,
    link: "/dashboard",
  },
  {
    title: "Program",
    // icon: <InsightsIcon/>,
    link: "/program",
  },
];

const Programs = [
  {
    id: 1,
    name: "Full Body",
  },
  {
    id: 2,
    name: "Bro Split",
  },
  {
    id: 3,
    name: "Upper Lower",
  },
];

function ResponsiveDrawer(props) {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(true);

  // Expanding list item state and click handler
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onClickEvent = () => {
    navigate('/dashboard')
  }

  const onClickProgram = (id) => {
    navigate(`/program/${id}`)
  }


  const header = (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 100 }} onClick={onClickEvent}>
          Workout Tracker
        </Typography>
        <Avatar alt="Jason Ling" src="images/pikachu.png" />
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );

  const drawerItems = (
    <div>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={onClickEvent}>
          <ListItemIcon>
            <EqualizerIcon />
          </ListItemIcon>
          <ListItemText primary={'Dashboard'} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText primary={'Programs'} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            {/* ARRAY OF PROGRAMS */}
            {Programs.map((program) => (
              <ListItemButton key={program.id} sx={{ pl: 4 }} onClick={() => onClickProgram(program.id)}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={program.name} />
              </ListItemButton>
            ))}

          </List>
        </Collapse>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}
    >
      <CssBaseline />
      {header}

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
        }}

      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
