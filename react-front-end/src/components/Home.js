import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mapImage from "../assets/map-home.png"

import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1578409760928-91924170cb81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },

  container: {
    padding: "75px 0 125px"
  },

  itemContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "1280px",
    position: "relative",
    justifyContent: "space-around",
    margin: "75px 0 0",
  },

  mapContainer: {
    display: "flex",
    width: "100%",
    backgroundColor: "rgb(22, 28, 36)",
    margin: "45px 0 0",
    padding: "120px 0px"
  },

  itemTitle: {
    fontFamily: 'Be Vietnam',
    fontWeight: "700"
  },

  item: {
    display: "flex",
    position: "relative",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "rgb(232 232 232 / 48%)",
    paddingTop: "80px",
    maxWidth: "300px",
    minHeight: "440px",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignSelf: "start",
    boxShadow: "4px 1px 13px -2px rgba(0,0,0,0.12)",
  },

  svg: {
    position: "relative",
    width:"20%",
    height:"100%",
    margin:"45px auto",
    color: "green"
  },

  mapTitle: {
    marginBottom: "45px"
  },

  mapText: {
    color: "white",
    alignSelf: "center",
    textAlign: "start",
    width: "100%",
    maxWidth: "250px"
  },

  mapImage: {
    position: "relative",
    width: "65%"
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className="Home">
      <Box className={classes.hero}>
        <h1>GlassWalls</h1>
      </Box>
      <Container className={classes.container}>
        <Grid>
          <Typography className={classes.itemTitle} variant="h4">How GlassWalls works for you</Typography>
        </Grid>
        <Grid className={classes.itemContainer} container spacing={3}>
          <Grid className={classes.item} item xs>
            <RateReviewOutlinedIcon className={classes.svg} />
            <Typography>Reviews</Typography>
          </Grid>
          <Grid className={classes.item} item xs>
            <MapOutlinedIcon className={classes.svg} />
            <Typography>Map</Typography>
          </Grid>
          <Grid className={classes.item} item xs>
            <ExploreOutlinedIcon className={classes.svg} />
            <Typography>Areas</Typography>
          </Grid>
        </Grid>
      </Container>
      
      <Grid className={classes.mapContainer} container spacing={2}>
        <Grid item xs={8}>
          <img className={classes.mapImage}  src={mapImage}/>
        </Grid>
        <Grid className={classes.mapText} item xs={4}m>
          <Typography variant="h4" className={classes.mapTitle}>Map</Typography>
          <Typography variant="p">I want to see reviews of nearby apartments so I can get more information</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
