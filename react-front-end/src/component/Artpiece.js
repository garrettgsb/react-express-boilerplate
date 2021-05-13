import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    height: "auto",
    transition: "transform .2s" /* Animation */,

    "&:hover": {
      opacity: 0.9,
      transform: "scale(1.03)",
      // "z-index": "9999",
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

export default function Artpiece() {
  const classes = useStyles();
  const { id } = useParams();
  const [artpiece, setArtpiece] = useState({});

  useEffect(() => {
    axios.get(`/api/artworks/${id}`).then((res) => {
      setArtpiece(res.data.artwork[0]);
    });
  }, []);

  return (
    // { id, title, imgLink, projectLink, description, forSale, price }
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={artpiece.img_link}
          title={artpiece.title}
        />
        {/* <CardContent> */}
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.text}
        >
          {artpiece.title}
          <br />${artpiece.price}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary" component="p">
              {props.description} ${props.price} {props.forSale.toString()}
            </Typography> */}
        {/* </CardContent> */}
      </CardActionArea>
      {/* {artpiece.author_id === artpiece.activeUser && (
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => artpiece.onClick(artpiece.id)}
          >
            <h4>Delete</h4>
          </Button>
        </CardActions>
      )} */}
    </Card>
  );
}
