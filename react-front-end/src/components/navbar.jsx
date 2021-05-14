import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className="NavBar">
          <Typography variant="h5" className="AppName">
            <a href="/Moods">mindfull</a>
          </Typography>
          <div className="Buttons">
            <Button className="LoginRegister" color="inherit">
              <a href="/Profile">
                <img
                  src={require("../images/newPanda.png")}
                  alt="Panda"
                  height="30em"
                  width="40em"
                />
              </a>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
