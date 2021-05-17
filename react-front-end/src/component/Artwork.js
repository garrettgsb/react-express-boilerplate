import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useStyles } from "./Component_Style/Artwork.jsx";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import IconButton from "@material-ui/core/IconButton";

export default function Artwork(props) {
  const classes = useStyles();

  return (
    <Card data-card-type="profile" className={classes.root}>
      <Link to={`/artpiece/${props.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.text}
          >
            {props.title}
            <br />
            {props.authorUsername}
          </Typography>
        </CardActionArea>
      </Link>
      {props.author_id === props.activeUser && (
        <CardActions>
          <IconButton
            size="small"
            onClick={() => props.onEdit(props.id)}
            className={classes.editButton}
          >
            <EditOutlinedIcon data-card-type="edit" />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => props.onClick(props.id)}
            className={classes.deleteButton}
          >
            <DeleteOutlineIcon data-card-type="delete" />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}
