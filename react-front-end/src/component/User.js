import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Artworks from "./Artworks";
import Form from "./Form";
import styled from "styled-components";
import ProfilePic from "./ProfilePic";
import { makeStyles } from "@material-ui/core/styles";
import Empty from "./Empty";
import UserInfoGrid from "./UserInfoGrid";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: "550",
//     height: "auto",
//     "&:hover": {
//       opacity: 0.9,
//     },
//   },
//   media: {
//     height: 350,
//   },
//   container: {
//     width: "100%",
//     paddingLeft: "50px",
//     paddingRight: "50px",
//     paddingTop: "50px",
//   },
//   grid: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

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
  const classes = useStyles();
  const [art, setArt] = useState(false);

  const addArt = () => {
    setArt(true);
  };

  let { id } = useParams();
  const [portfolio, setPortfolio] = useState([]);
  // console.log("user", typeof props.activeUser);
  // console.log("id", typeof id);
  useEffect(() => {
    axios.get(`/api/users/${id}`).then((res) => {
      // console.log("pirate treasure", res.data.portfolio);
      setPortfolio(res.data.portfolio);
    });
  }, []);

  //   return (
  //     <div>
  //       <div>
  //         {" "}
  //         <UserInfoGrid />{" "}
  //       </div>
  //       <div className={classes.container}>
  //         {portfolio[0] && <ProfilePic userInfo={portfolio[0]} />}
  //         {id === `${props.activeUser}` && !art && <Empty onAdd={addArt} />}
  //         {id === `${props.activeUser}` && art && <Form />}
  //         <div>{portfolio[0] && portfolio[0].username}</div>
  //         <div>{portfolio[0] && portfolio[0].first_name}</div>
  //         <div>{portfolio[0] && portfolio[0].last_name}</div>
  //         <div>{portfolio[0] && portfolio[0].cool_fact}</div>
  //       </div>
  //       <Artworks art={portfolio} />
  //     </div>
  //   );
  // }

  // import Paper from "@material-ui/core/Paper";
  // import Grid from "@material-ui/core/Grid";

  // export default function UserInfoGrid() {
  //   const classes = useStyles();

  //   function FormRow() {
  //     return (
  //       <React.Fragment>
  //         <Grid item xs={4}>
  //           <Paper className={classes.paper}>item</Paper>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Paper className={classes.paper}>item</Paper>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Paper className={classes.paper}>item</Paper>
  //         </Grid>
  //       </React.Fragment>
  //     );
  //   }
  // function FormRow() {
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
          {portfolio[0] && <ProfilePic userInfo={portfolio[0]} />}
        </Grid>

        {/* USER INFO */}
        <Grid item xs={12} sm={6} md={4}>
          <div>{portfolio[0] && portfolio[0].username}</div>
          <div>{portfolio[0] && portfolio[0].first_name}</div>
          <div>{portfolio[0] && portfolio[0].last_name}</div>
          <div>{portfolio[0] && portfolio[0].cool_fact}</div>
        </Grid>

        {/* ADD ARTWORK BUTTON */}
        <Grid item xs={12} sm={6} md={4}>
          {id === `${props.activeUser}` && !art && <Empty onAdd={addArt} />}
          {id === `${props.activeUser}` && art && <Form />}
        </Grid>
      </Grid>
      <div>
        <Artworks art={portfolio} />
      </div>
    </div>
  );
}
