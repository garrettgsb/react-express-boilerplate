import * as React from "react";

import {
  Avatar,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Appbar(props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 100 }}
          onClick={props.onClickEvent}
        >
          Workout Tracker
        </Typography>
        <Avatar alt="Jason Ling" src="images/pikachu.png" />
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
