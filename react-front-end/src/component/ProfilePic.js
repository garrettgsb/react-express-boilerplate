import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

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
  let { id } = useParams();
  const history = useHistory();
  console.log("PIRATE props", props.userInfo);

  const addFriend = () => {
    const friend = {
      first_user_id: 1,
      second_user_id: props.userInfo.id,
    };
    axios.put(`/api/friends`, friend).then(() => {
      // window.location.reload();
    });
    localStorage.setItem("activeConversation", [
      friend.first_user_id,
      friend.second_user_id,
    ]);
    history.push(`/portfolio/${props.userInfo.id}`);
  };

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
          <button
            onClick={() => {
              addFriend();
            }}
          >
            Add {props.userInfo.username} as a friend!
          </button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
