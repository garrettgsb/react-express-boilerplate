import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
//import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import MoreVertIcon from "@material-ui/icons/MoreVert";
//import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import { useStyles } from "./Component_Style/Artpiece";

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const { id } = useParams();
  const [expanded, setExpanded] = React.useState(false);
  const [artpiece, setArtpiece] = useState({});
  console.log(artpiece);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios.get(`/api/artworks/${id}`).then((res) => {
      setArtpiece(res.data.artwork[0]);
    });
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader title={artpiece.title} subheader={artpiece.username} />
      <CardMedia
        className={classes.media}
        image={artpiece.img_link}
        title={artpiece.title}
      />
      <CardActions disableSpacing>
        <Link to={`/portfolio/${artpiece.author_id}`}>
          <IconButton aria-label="add to favorites">
            <PermIdentityIcon />
          </IconButton>
        </Link>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
      <CardContent className={classes.info_card}>
        <Typography className={classes.title}>{artpiece.title}</Typography>
        <Typography className={classes.author}>{artpiece.username}</Typography>
        {/* <Typography title>{artpiece.}</Typography> */}
        {/* <br /> */}
        {/* <Typography paragraph>Description:</Typography> */}
        <Typography className={classes.description}>
          {artpiece.descrip}
        </Typography>
        {artpiece.price > 0 && (
          <Typography
            className={classes.price}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            For Sale ${artpiece.price > 0 && artpiece.price}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
