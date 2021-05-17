import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./Component_Style/JobListItem.jsx";

export default function Job(props) {
  let { id } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const addFriend = () => {
    const friend = {
      first_user_id: props.activeUser,
      second_user_id: job.user_id,
    };
    axios.put(`/api/friends`, friend).then(() => {});
    localStorage.setItem("activeConversation", [
      friend.first_user_id,
      friend.second_user_id,
    ]);
    history.push("/messages");
  };

  const [job, setJob] = useState({});

  useEffect(() => {
    axios.get(`/api/jobs/${id}`).then((res) => {
      setJob(res.data.job[0]);
    });
  }, []);

  return (
    <div className={classes.rootContainer}>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          ></Typography>
          <Typography variant="h5" component="h2">
            {job.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {job.company}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {job.location}
            {bull}${job.pay}
          </Typography>
          <Typography variant="body2" component="p">
            {job.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.contactContainer}>
          <IconButton
            size="small"
            type="submit"
            value="Submit"
            onClick={addFriend}
            path="/messages"
            className={classes.contactButton}
          >
            <MailOutlineIcon />
            Contact
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
