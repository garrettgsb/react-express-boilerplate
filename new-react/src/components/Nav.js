import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SmsIcon from "@mui/icons-material/Sms";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  // button: { color: "black" },
  text: { color: "pink" },
});

const Nav = (props) => {
  const classes = useStyles();
  let login = false;

  const menuId = "primary-search-account-menu";
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (e) => {
    console.log("login", anchorEl);
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!props.login && (
        <MenuItem onClick={handleMenuClose} component={Link} to="/login">
          Login
        </MenuItem>
      )}
      {!props.login && (
        <MenuItem onClick={handleMenuClose} component={Link} to="/register">
          Register
        </MenuItem>
      )}
      {props.login && <MenuItem onClick={handleMenuClose}>Logout</MenuItem>}
      <MenuItem onClick={handleMenuClose} component={Link} to="/itineraries">
        Itineraries
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button size="large" color="inherit" component={Link} to="/">
            The Itinerary
          </Button>
        </Box>
        <IconButton
          // classes={{ root: classes.button }}
          disabled={login ? false : true}
          size="large"
          color="inherit"
          component={Link}
          to="itinerary/:id"
        >
          <ListAltIcon />
        </IconButton>
        <IconButton
          disabled={login ? false : true}
          size="large"
          color="inherit"
          component={Link}
          to="itinerary/:id/map"
        >
          <MapIcon />
        </IconButton>
        <IconButton
          disabled={login ? false : true}
          size="large"
          color="inherit"
          component={Link}
          to="itinerary/:id/chat"
        >
          <SmsIcon />
        </IconButton>
        <IconButton
          onClick={handleMenuOpen}
          size="large"
          color="inherit"
          aria-label="menu"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
};

export default Nav;
