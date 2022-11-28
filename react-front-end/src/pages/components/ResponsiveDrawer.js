import * as React from "react";

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
} from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Appbar from "./Appbar";

const drawerWidth = 240;

// MOCK DATA
const navbarData = [
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
    key: 1,
    name: "Full Body",
  },
  {
    key: 2,
    name: "Bro Split",
  },
  {
    key: 3,
    name: "Upper Lower",
  },
];

export default function ResponsiveDrawer(props) {
  const { window } = props;

  // Expanding list item state and click handler
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  // Toggling drawer state and menu button click handler
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerItems = (
    <div>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <EqualizerIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText primary={"Programs"} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* ARRAY OF PROGRAMS */}
            {Programs.map((program) => (
              <ListItemButton key={program.key} sx={{ pl: 4 }}>
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
    <Box sx={{ display: "flex" }}>
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
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
