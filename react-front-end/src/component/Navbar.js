import React from "react";
import { Link } from "react-router-dom";

import "@fontsource/roboto";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BrushTwoToneIcon from "@material-ui/icons/BrushTwoTone";
import ExploreIcon from "@material-ui/icons/Explore";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";

import SearchBar from "./SearchPage";

import { useStyles } from "./Component_Style/Navbar.jsx";

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      classes={{ paper: classes.menu }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/messages" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
      </Link>

      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <ExploreIcon />
          </IconButton>
          <p>Explore</p>
        </MenuItem>
      </Link>

      <Link to="/job_board" style={{ textDecoration: "none", color: "black" }}>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <BrushTwoToneIcon />
          </IconButton>
          <p>Jobs</p>
        </MenuItem>
      </Link>

      {/* Profile Button */}
      <Link
        to={`/portfolio/${props.activeUser}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.navbar_container}>
      <div className={classes.grow}>
        <AppBar position="static" style={{ background: "#2B2C3B" }}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.search_container}>
              {/* inkedin REACT ROUTER LINK TO INDEX */}
              <Link to="/" style={{ textDecoration: "none", color: "#B9A1BE" }}>
                <Typography className={classes.title} variant="h6" noWrap>
                  <img
                    className={classes.logo}
                    src="../images/Inkedin_squid.png"
                    alt="Inkedin Squid"
                  />
                </Typography>
              </Link>
              <div>
                <SearchBar filteredSearch={props.filteredSearch} />
              </div>
            </div>
            <div className={classes.nav_buttons_container}>
              <div className={classes.sectionDesktop}>
                {/* REACT ROUTER LINK TO LOGIN */}
                {props.activeUser === 0 && (
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#B9A1BE" }}
                  >
                    <IconButton aria-label="show 4 new mails" color="inherit">
                      Login
                    </IconButton>
                  </Link>
                )}
                {props.activeUser !== 0 && (
                  <Link
                    to="/"
                    onClick={() => {
                      props.onLogin(0);
                    }}
                    style={{ textDecoration: "none", color: "#B9A1BE" }}
                  >
                    <IconButton aria-label="show 4 new mails" color="inherit">
                      Logout
                    </IconButton>
                  </Link>
                )}

                {/* REACT ROUTER LINK TO MESSAGES */}
                <Link
                  to="/messages"
                  style={{ textDecoration: "none", color: "#B9A1BE" }}
                >
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                </Link>

                {/* REACT ROUTER LINK TO SHOWCASE */}
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#B9A1BE" }}
                >
                  <IconButton
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge color="secondary">
                      <ExploreIcon />
                    </Badge>
                  </IconButton>
                </Link>

                {/* REACT ROUTER LINK TO JOBS */}
                <Link
                  to="/job_board"
                  style={{ textDecoration: "none", color: "#B9A1BE" }}
                >
                  <IconButton
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge color="secondary">
                      <BrushTwoToneIcon />
                    </Badge>
                  </IconButton>
                </Link>

                {/* REACT ROUTER LINK TO PORTFOLIO */}
                <Link
                  to={`/portfolio/${props.activeUser}`}
                  style={{ textDecoration: "none", color: "#B9A1BE" }}
                >
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </Link>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </div>
  );
}
