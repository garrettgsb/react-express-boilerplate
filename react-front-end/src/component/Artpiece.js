import { useParams, Link } from "react-router-dom";
import axios from "axios";
// import { useStyles } from "./Component_Style/Artpiece.jsx";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
//import Collapse from "@material-ui/core/Collapse";
//import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
//import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import MoreVertIcon from "@material-ui/icons/MoreVert";
//import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    margin: "5%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const { id } = useParams();
  const [expanded, setExpanded] = React.useState(false);
  const [artpiece, setArtpiece] = useState({});

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios.get(`/api/artworks/${id}`).then((res) => {
      setArtpiece(res.data.artwork[0]);
    });
  }, []);
  console.log("-->", artpiece);
  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={artpiece.title}
        subheader="September 14, 2016"
      />
      {/* <h1>{artpiece}</h1> */}
      <CardMedia
        className={classes.media}
        image={artpiece.img_link}
        title={artpiece.title}
      />
      <CardActions disableSpacing>
        <Link to={`/portfolio/${artpiece.author_id}`}>
          <IconButton aria-label="add to favorites">
            {/* <FavoriteIcon /> */}
            <PermIdentityIcon />
          </IconButton>
        </Link>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* {artpiece.author_id === artpiece.activeUser && (
          <IconButton
            size="small"
            color="primary"
            onClick={() => artpiece.onClick(artpiece.id)}
          >
            <DeleteOutlineIcon />
          </IconButton>
        )} */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          For Sale ${artpiece.price}
        </Typography>
        <br />
        <Typography paragraph>Description:</Typography>
        <Typography paragraph>{artpiece.descrip}</Typography>
      </CardContent>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            paragraph goes here
          </Typography>
          <Typography paragraph>
            paragraph goes here
          </Typography>
          <Typography paragraph>
            paragraph goes here
          </Typography>
          <Typography>
            more text here
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
