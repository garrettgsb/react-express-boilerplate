import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

export default function ProfilePic(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.userInfo.profile_pic}
          title={props.userInfo.username}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.userInfo.username}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
