import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useParams } from "react-router-dom";
import { useStyles } from "./Component_Style/Artwork.jsx";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import IconButton from "@material-ui/core/IconButton";

export default function Artwork(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/artpiece/${props.id}`}>
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
      </Link>
      {props.author_id === props.activeUser && (
        <CardActions>
          <IconButton
            size="small"
            color="primary"
            onClick={() => props.onClick(props.id)}
            className={{ root: classes.editDeleteButtons }}
          >
            <DeleteOutlineIcon />
          </IconButton>
          <IconButton
            size="small"
            color="primary"
            onClick={() => props.onEdit(props.id)}
            classes={{ root: classes.editDeleteButtons }}
            style={{ minWidth: "10px" }}
          >
            <EditOutlinedIcon />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
}
