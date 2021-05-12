import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Artworks from "./Artworks";
import Form from "./Form";
import ProfilePic from "./ProfilePic";
import { makeStyles } from "@material-ui/core/styles";
import Empty from "./Empty";
import Grid from "@material-ui/core/Grid";
import useApplicationData from "../hooks/useApplicationData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingBottom: "50px",
    paddingTop: "50px",
  },
}));

export default function User(props) {
  const { state, setPortfolio } = useApplicationData();
  const classes = useStyles();
  const [art, setArt] = useState(false);

  const addArt = () => {
    setArt(true);
  };

  let { id } = useParams();

  const onClick = (id) => {
    axios.delete(`/api/artworks/${id}`).then(() => {
      setPortfolio();
    });
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        item
        xs={12}
        spacing={1}
        className={classes.gridContainer}
        justify="center"
      >
        {/* PROFILE PIC */}
        <Grid item xs={12} sm={6} md={4}>
          {state.portfolio[0] && <ProfilePic userInfo={state.portfolio[0]} />}
        </Grid>

        {/* USER INFO */}
        <Grid item xs={12} sm={6} md={4}>
          <div>{state.portfolio[0] && state.portfolio[0].username}</div>
          <div>{state.portfolio[0] && state.portfolio[0].first_name}</div>
          <div>{state.portfolio[0] && state.portfolio[0].last_name}</div>
          <div>{state.portfolio[0] && state.portfolio[0].cool_fact}</div>
        </Grid>

        {/* ADD ARTWORK BUTTON */}
        <Grid item xs={12} sm={6} md={4}>
          {id === `${state.activeUser}` && state.activeUser !== 0 && !art && (
            <Empty onAdd={addArt} />
          )}
          {id === `${state.activeUser}` && state.activeUser !== 0 && art && (
            <Form />
          )}
        </Grid>
      </Grid>
      <div>
        <Artworks
          art={state.portfolio}
          activeUser={state.activeUser}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
