import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    height: "auto",
    "&:hover": {
      opacity: 0.9,
    },
  },
  media: {
    height: 350,
  },
  text: {
    color: "lavender",
    fontSize: 35,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    opacity: 0,

    "&:hover": {
      background: "black",
      opacity: 0.7,
    },
  },
});

export default function Artwork(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        {/* <CardContent> */}
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.text}
        >
          {props.title}
          <br />${props.price}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary" component="p">
            {props.description} ${props.price} {props.forSale.toString()}
          </Typography> */}
        {/* </CardContent> */}
      </CardActionArea>
      {props.author_id === props.activeUser && (
        <CardActions>
          <Button size="small" color="primary">
            <a href={props.url}>Delete</a>
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
