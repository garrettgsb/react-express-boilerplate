import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Artworks from "./Artworks";
import Form from "./Form";
import ProfilePic from "./ProfilePic";
import { makeStyles } from "@material-ui/core/styles";
import Empty from "./Empty";
import Grid from "@material-ui/core/Grid";
// import { useStyles } from "./Component_Style/User.jsx";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Component_Style/User.jsx";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
//   gridContainer: {
//     paddingLeft: "50px",
//     paddingRight: "50px",
//     paddingBottom: "50px",
//     paddingTop: "50px",
//   },
// }));

export default function User(props) {
  const [state, setState] = useState({
    addArt: false,
    showEdit: false,
    artID: 0,
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const addArt = () => {
    setState({ ...state, addArt: true });
  };

  let { id } = useParams();

  useEffect(() => {
    axios.get(`/api/artworks/users/${id}`).then((res) => {
      setState({ ...state, portfolio: res.data.portfolio });
    });
  }, [state.addArt, state.showEdit]);

  const onDelete = (id) => {
    axios.delete(`/api/artworks/${id}`).then(() => {
      setState({ ...state });
    });
  };

  const onCreate = (artwork) => {
    axios.put(`/api/artworks`, artwork).then((res) => {
      setState({ ...state, addArt: false });
    });
  };

  const onEdit = (id) => {
    setState({ ...state, showEdit: true, artID: id });
  };

  const onEditSubmit = (art) => {
    axios.put(`/api/artworks/${state.artID}`, art).then(() => {
      setState({ ...state, showEdit: false });
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
          {state.portfolio && <ProfilePic userInfo={state.portfolio[0]} />}
        </Grid>

        {/* USER INFO */}
        <Grid item xs={12} sm={6} md={4}>
          {/* <div>{state.portfolio && state.portfolio[0].username}</div>
          <div>{state.portfolio && state.portfolio[0].first_name}</div>
          <div>{state.portfolio && state.portfolio[0].last_name}</div>
          <div>{state.portfolio && state.portfolio[0].cool_fact}</div> */}

          <Card>
            <CardContent className={classes.rootUserInfo}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {state.portfolio && state.portfolio[0].first_name}
                &nbsp;
                {state.portfolio && state.portfolio[0].last_name}
              </Typography>
              <div>
                <Typography
                  // variant="h5"
                  // component="h2"
                  className={classes.username}
                >
                  {/* {bull} */}
                  {state.portfolio && state.portfolio[0].username}
                </Typography>
              </div>
              {/* <div>
                <Typography className={classes.pos} color="textSecondary">
                  {state.portfolio && state.portfolio[0].first_name}
                  &nbsp;
                  {state.portfolio && state.portfolio[0].last_name}
                </Typography>
              </div> */}
              <div>
                <Typography
                  // variant="body2"
                  // component="p"
                  className={classes.description}
                >
                  {state.portfolio && state.portfolio[0].cool_fact}
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* ADD ARTWORK BUTTON */}
        <Grid item xs={12} sm={6} md={4}>
          {id === `${props.activeUser}` &&
            props.activeUser !== 0 &&
            !state.addArt &&
            !state.showEdit && <Empty onAdd={addArt} />}
          {id === `${props.activeUser}` &&
            props.activeUser !== 0 &&
            state.addArt && (
              <Form onCreate={onCreate} activeUser={props.activeUser} />
            )}
          {id === `${props.activeUser}` &&
            props.activeUser !== 0 &&
            state.showEdit && (
              <Form onCreate={onEditSubmit} activeUser={props.activeUser} />
            )}
        </Grid>
      </Grid>
      {state.portfolio && state.portfolio[0].title && (
        <div>
          <Artworks
            art={state.portfolio}
            activeUser={props.activeUser}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      )}
    </div>
  );
}
