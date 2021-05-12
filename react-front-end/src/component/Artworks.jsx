import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Artwork from "./Artwork";

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
  },
}));

export default function Artworks(props) {
  const classes = useStyles();
  // console.log(props.art);
  function FormRow() {
    return (
      <React.Fragment>
        <Grid
          container
          spacing={1}
          className={classes.gridContainer}
          justify="center"
        >
          {props.art.map((artpiece) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Artwork
                  id={artpiece.id}
                  title={artpiece.title}
                  image={artpiece.img_link}
                  description={artpiece.descrip}
                  price={artpiece.price}
                  forSale={artpiece.for_sale}
                  url={artpiece.project_link}
                  author_id={artpiece.author_id}
                  activeUser={props.activeUser}
                />
              </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={1}> */}
      <Grid container item xs={12} spacing={1}>
        <FormRow />
      </Grid>
      {/* </Grid> */}
    </div>
  );
}
