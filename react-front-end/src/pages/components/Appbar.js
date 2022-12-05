import * as React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${props.drawerWidth}px)` },
        ml: { md: `${props.drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 100 }}
          onClick={handleClick}
        >
          Workout Tracker
        </Typography>

        <Avatar alt="Jason Ling" src="images/pikachu.png" />
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
