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

export default function User(props) {
  const [state, setState] = useState({
    showAdd: false,
    showEdit: false,
    artID: 0,
    portfolio: [],
  });

  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  let { id } = useParams();

  useEffect(() => {
    axios.get(`/api/artworks/users/${id}`).then((res) => {
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
                  <Typography
                    // variant="h5"
                    // component="h2"
                    className={classes.username}
                  >
                    {/* {bull} */}
                    {state.portfolio[0].username}
                  </Typography>
                </div>
                <div>
                  <Typography
                    // variant="body2"
                    // component="p"
                    className={classes.description}
                  >
                    {state.portfolio[0].cool_fact}
                  </Typography>
                </div>
              </CardContent>
              {/* <CardActions>
              <Button size="small" className={classes.websiteLink}>
                {state.portfolio && state.portfolio[0].username}'s Website
              </Button>
            </CardActions> */}
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
