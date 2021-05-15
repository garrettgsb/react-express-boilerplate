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

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 550,
//     height: "auto",
//     transition: "transform .2s" /* Animation */,

//     "&:hover": {
//       opacity: 0.9,
//       transform: "scale(1.03)",
//       // "z-index": "9999",
//     },
//   },
//   media: {
//     height: 350,
//   },
//   text: {
//     color: "lavender",
//     fontSize: 35,
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     textAlign: "center",
//     opacity: 0,

//     "&:hover": {
//       background: "black",
//       opacity: 0.7,
//     },
//   },
// });

// .zoom {
//   padding: 50px;
//   background-color: green;
//   transition: transform .2s; /* Animation */
//   width: 200px;
//   height: 200px;
//   margin: 0 auto;
// }

// .zoom:hover {
//   transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
// }

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
          <Button
            size="small"
            color="primary"
            onClick={() => props.onClick(props.id)}
          >
            <h4>Delete</h4>
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => props.onEdit(props.id)}
          >
            <h4>Edit</h4>
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
