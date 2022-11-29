import * as React from "react";
import { useNavigate, Link } from "react-router-dom";

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

export default function ResponsiveDrawer(props) {
  const { window } = props;

  const navigate = useNavigate();

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

  // Main logo click handler
  const onClickEvent = () => {
    navigate("/dashboard");
  };

  // Program navigation click handler
  const onClickProgram = (id) => {
    navigate(`/program/${id}`);
  };

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
              <Link to={`/program/${program.id}`} className={"programListItem"}>
                <ListItemButton key={program.id} sx={{ pl: 4 }}>
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
        onClickEvent={onClickEvent}
      />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="workout app navigation"
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
