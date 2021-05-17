import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Artworks from "./Artworks";
import Form from "./Form";
import ProfilePic from "./ProfilePic";
import Empty from "./Empty";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Component_Style/User.jsx";

export default function User(props) {
  const [state, setState] = useState({
    showAdd: false,
    showEdit: false,
    artID: 0,
    portfolio: [],
  });

  const classes = useStyles();
  let { id } = useParams();

  useEffect(() => {
    axios.get(`/api/users/${id}/artworks`).then((res) => {
      setState({ ...state, portfolio: res.data.portfolio });
    });
  }, [state.showAdd, state.showEdit, state.artID, id]);

  const showAdd = () => {
    setState({ ...state, showAdd: true, showEdit: false });
  };

  const onCreate = (artwork) => {
    axios.put(`/api/artworks`, artwork).then((res) => {
      setState({ ...state, showAdd: false });
    });
  };

  const onDelete = (id) => {
    axios.delete(`/api/artworks/${id}`).then(() => {
      setState({ ...state, artID: id });
    });
  };

  const onEdit = (id) => {
    setState({ ...state, showEdit: true, showAdd: false, artID: id });
    window.scrollTo(20, 270);
  };

  const onEditSubmit = (art) => {
    axios.put(`/api/artworks/${state.artID}`, art).then(() => {
      setState({ ...state, showEdit: false });
    });
  };

  const onCancel = () => {
    setState({ ...state, showEdit: false, showAdd: false });
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
        {state.portfolio[0] && (
          <Grid item xs={12} sm={6} md={4}>
            <ProfilePic userInfo={state.portfolio[0]} />
          </Grid>
        )}

        {/* USER INFO */}

        {state.portfolio[0] && (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent className={classes.rootUserInfo}>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {state.portfolio[0].first_name}
                  {state.portfolio[0].last_name}
                </Typography>
                <div>
                  <Typography className={classes.username}>
                    {state.portfolio[0].username}
                  </Typography>
                </div>
                <div>
                  <Typography className={classes.description}>
                    {state.portfolio[0].cool_fact}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        )}

        {/* ADD ARTWORK BUTTON */}
        {id === `${props.activeUser}` && props.activeUser !== 0 && (
          <Grid item xs={12} sm={6} md={4}>
            {!state.showAdd && !state.showEdit && <Empty onAdd={showAdd} />}
            {state.showAdd && (
              <Form
                onCreate={onCreate}
                onCancel={onCancel}
                activeUser={props.activeUser}
                formHeader={"Add"}
              />
            )}
            {state.showEdit && (
              <Form
                onCreate={onEditSubmit}
                onCancel={onCancel}
                activeUser={props.activeUser}
                formHeader={"Edit"}
              />
            )}
          </Grid>
        )}
      </Grid>
      {state.portfolio[0] && state.portfolio[0].title && (
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
