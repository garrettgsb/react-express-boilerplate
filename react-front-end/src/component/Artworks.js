import React from "react";
import Grid from "@material-ui/core/Grid";
import Artwork from "./Artwork";
import { useStyles } from "./Component_Style/Artworks.jsx";
import Hero from "./Hero";

export default function Artworks(props) {
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        {/* <Hero /> */}
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
                  authorUsername={artpiece.username}
                  authorFirstName={artpiece.first_name}
                  authorLastName={artpiece.last_name}
                  author_id={artpiece.author_id}
                  activeUser={props.activeUser}
                  onClick={props.onDelete}
                  onEdit={props.onEdit}
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
      <Grid container item xs={12} spacing={1}>
        <FormRow />
      </Grid>
    </div>
  );
}
