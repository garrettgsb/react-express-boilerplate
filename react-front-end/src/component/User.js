import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Artworks from "./Artworks";
import Form from "./Form";
import { ArtWorksContext } from "../App.js";
import styled from "styled-components";
import ProfilePic from "./ProfilePic";
import { makeStyles } from "@material-ui/core/styles";
import FormJobs from "./FormJobs";
import Empty from "./Empty";

const useStyles = makeStyles({
  root: {
    maxWidth: "550",
    height: "auto",
    "&:hover": {
      opacity: 0.9,
    },
  },
  media: {
    height: 350,
  },
  container: {
    width: "100%",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "50px",
  },
});

export default function User(props) {
  const value = useContext(ArtWorksContext);
  const classes = useStyles();
  const [art, setArt] = useState(false);

  const addArt = () => {
    setArt(true);
  };

  // const addArtwork = (
  //   <div>
  //     {/* <ArtWorksContext.Provider value={state.artworks}> */}
  //     {console.log("state = ", props)}
  //     {props.activeUser === 0 ? (
  //       <User activeUser={props.activeUser} />
  //     ) : (
  //       <>
  //         <User activeUser={props.activeUser} />
  //         {!art ? (
  //           <>
  //             <Empty onAdd={addArt} />
  //           </>
  //         ) : (
  //           <Form />
  //         )}
  //       </>
  //     )}
  //     {/* </ArtWorksContext.Provider> */}
  //   </div>
  // );

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

  return (
    <div>
      <div className={classes.container}>
        {portfolio[0] && <ProfilePic userInfo={portfolio[0]} />}
        {id === `${props.activeUser}` && !art && <Empty onAdd={addArt} />}
        {id === `${props.activeUser}` && art && <Form />}
        <div>{portfolio[0] && portfolio[0].username}</div>
        <div>{portfolio[0] && portfolio[0].first_name}</div>
        <div>{portfolio[0] && portfolio[0].last_name}</div>
        <div>{portfolio[0] && portfolio[0].cool_fact}</div>
      </div>
      <Artworks art={portfolio} />
    </div>
  );
}
