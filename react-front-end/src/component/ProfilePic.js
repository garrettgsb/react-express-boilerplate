import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import useApplicationData from "../hooks/useApplicationData";
import { useStyles } from "./Component_Style/ProfilePic.jsx";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles({
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
// });

export default function ProfilePic(props) {
  const { state, setFriends } = useApplicationData();
  const classes = useStyles();

  const addFriend = () => {
    const friend = {
      first_user_id: Number(state.activeUser),
      second_user_id: props.userInfo.user_id,
    };
    axios.put(`/api/friends`, friend).then(() => {});
    localStorage.setItem("activeConversation", [
      friend.first_user_id,
      friend.second_user_id,
    ]);
    setFriends();
  };

  const isNotFriends = () => {
    let notFriends = true;
    state.friends.map((friend) => {
      if (
        friend.first_id === props.userInfo.user_id ||
        friend.second_id === props.userInfo.user_id ||
        state.activeUser === props.userInfo.user_id
      ) {
        notFriends = false;
      }
    });
    return notFriends;
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
          <CardActions>
            <Typography gutterBottom className="usernameAndButtonContainer">
              {props.userInfo.username}
            </Typography>
            <div className="button">
              {isNotFriends() && (
                <button
                  onClick={() => {
                    addFriend();
                  }}
                >
                  {/* Add {props.userInfo.username} as a friend! */}
                  <PersonAddIcon />
                </button>
              )}
            </div>
          </CardActions>
          {/* <div className="usernameAndButtonContainer"> */}
          {/* <div> */}
          <Typography gutterBottom className="usernameAndButtonContainer">
            <div className="username">{props.userInfo.username}</div>
            <div className="button">
              {isNotFriends() && (
                <button
                  onClick={() => {
                    addFriend();
                  }}
                >
                  {/* Add {props.userInfo.username} as a friend! */}
                  <PersonAddIcon />
                </button>
              )}
            </div>
          </Typography>
          {/* </div>
            <div> */}
          {/* </div> */}
          {/* </div> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
