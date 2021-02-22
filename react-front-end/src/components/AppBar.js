import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HomeIcon from "@material-ui/icons/Home";
import GitGoodLogo from "./GitGoodLogo.png";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    multilineColor: {
      color: "white",
      border: "1px solid white",
    },
    logo: {
      maxWidth: 160,
      float: "left",
    },
    homeicon: {
      '&:hover': {
        transform: "translateY(-3px) scale(1.06)"
      }
    }
  })
);

export default function NavBar(props) {
  const classes = useStyles();

  const [userLogin, setUserLogin] = useState("");
  const [login, setLogin] = useState(localStorage.getItem("username"));
  const handleLogin = (e) => {
    setUserLogin(e.target.value);
  };
  const submitLogin = (e) => {
    if (userLogin.length > 0) {
      e.preventDefault();
      props.setStorage(userLogin);
      setUserLogin("");
      setLogin(true);
    }
  };

  const clearStorage = () => {
    localStorage.clear();
    setLogin(false);
    window.location.href = "/";
  };

  // const LogoutButton = () => {
  //   return (<div>
  //             <Button color="inherit" onClick={ clearStorage }>Logout</Button>
  //           </div>
  //   )
  // }

  // const LoginForm = () => {
  //   return (
  //     <>
  //       <form onSubmit={submitLogin}>
  //         <input
  //           type="text"
  //           class="form-control-plaintext"
  //           value={userLogin}
  //           onChange={handleLogin}
  //           placeholder="username"
  //         ></input>

  //         <Button color="inherit" onClick={submitLogin}>
  //           Login
  //         </Button>
  //       </form>
  //     </>
  //   );
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#000020" }}>
        <Toolbar>
          <Typography edge="start" className={classes.title}>
            <img
              src={GitGoodLogo}
              alt="GitGood logo"
              className={classes.logo}
            ></img>
          </Typography>
          <IconButton
            color="inherit"
            onClick={(event) => (window.location.href = "/")}
          >
            <HomeIcon className={classes.homeicon}/>
          </IconButton>
          <IconButton
            aria-label="show 4 new favorites"
            color="inherit"
            onClick={() => props.toLiked()}
            className={classes.homeicon}
          >
            {/* <Badge badgeContent={4} color="secondary"> */}
            <FavoriteBorderIcon />
            {/* </Badge> */}
          </IconButton>
          {login ? (
            <Button color="inherit" onClick={clearStorage} className={classes.homeicon}>
              Logout
            </Button>
          ) : (
            <LoginForm
              userLogin={userLogin}
              handleLogin={handleLogin}
              submitLogin={submitLogin}
              className={classes.homeicon}
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
