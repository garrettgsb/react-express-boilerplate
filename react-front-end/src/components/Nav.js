import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../assets/logo_transparent.png"
import avatarimg from "../assets/3.jpg"
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  navList: {
    color: "white",
    textDecoration: "none"
  },

  avatar: {
    width: "35px",
    height: "35px",
    marginRight: "50px"
  }

}));

export default function Nav() {
  const classes = useStyles();
  return (
    <nav>
      <div className="logo"><img className="logo-img" src={logo}/></div>
      <ul className="nav-links">
        <Link className={classes.navList} to="/">
          <li>Home</li>
        </Link>
        <Link className={classes.navList} to="/map">
          <li>Map</li>
        </Link>
        <Link className={classes.navList} to="/:userId/favourites">
          <li>Favourites</li>
        </Link>
      </ul>
      <Avatar alt="Cindy Baker" src={avatarimg} className={classes.avatar} />
      <p>May Baker</p>
    </nav>
    
  );
}
