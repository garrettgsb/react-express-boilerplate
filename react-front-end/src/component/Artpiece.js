// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useStyles } from "./Component_Style/Artpiece.jsx";

// // const useStyles = makeStyles({
// //   root: {
// //     maxWidth: 550,
// //     height: "auto",
// //     transition: "transform .2s" /* Animation */,

// //     "&:hover": {
// //       opacity: 0.9,
// //       transform: "scale(1.03)",
// //       // "z-index": "9999",
// //     },
// //   },
// //   media: {
// //     height: 350,
// //   },
// //   text: {
// //     color: "lavender",
// //     fontSize: 35,
// //     position: "absolute",
// //     top: "50%",
// //     left: "50%",
// //     transform: "translate(-50%, -50%)",
// //     textAlign: "center",
// //     opacity: 0,

// //     "&:hover": {
// //       background: "black",
// //       opacity: 0.7,
// //     },
// //   },
// // });

// export default function Artpiece() {
//   const classes = useStyles();
//   const { id } = useParams();
//   const [artpiece, setArtpiece] = useState({});

//   useEffect(() => {
//     axios.get(`/api/artworks/${id}`).then((res) => {
//       setArtpiece(res.data.artwork[0]);
//     });
//   }, []);

//   return (

//     // { id, title, imgLink, projectLink, description, forSale, price }
//     <h1>hello</h1>
//     //     <Card className={classes.root}>
//     //       <CardActionArea>
//     //         <CardMedia
//     //           className={classes.media}
//     //           image={artpiece.img_link}
//     //           title={artpiece.title}
//     //         />
//     //         {/* <CardContent> */}
//     //         <Typography
//     //           gutterBottom
//     //           variant="h5"
//     //           component="h2"
//     //           className={classes.text}
//     //         >
//     //           {artpiece.title}
//     //           <br />${artpiece.price}
//     //         </Typography>
//     //         {/* <Typography variant="body2" color="textSecondary" component="p">
//     //               {props.description} ${props.price} {props.forSale.toString()}
//     //             </Typography> */}
//     //         {/* </CardContent> */}
//     //       </CardActionArea>
//     //       {/* {artpiece.author_id === artpiece.activeUser && (
//     //         <CardActions>
//     //           <Button
//     //             size="small"
//     //             color="primary"
//     //             onClick={() => artpiece.onClick(artpiece.id)}
//     //           >
//     //             <h4>Delete</h4>
//     //           </Button>
//     //         </CardActions>
//     //       )} */}
//     //     </Card>

//   );
// }

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
// export default function Artpiece() {
//   const classes = useStyles();
//   const { id } = useParams();
//   const [artpiece, setArtpiece] = useState({});

//   useEffect(() => {
//     axios.get(`/api/artworks/${id}`).then((res) => {
//       setArtpiece(res.data.artwork[0]);
//     });
//   }, []);
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
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={artpiece.title}
        subheader="September 14, 2016"
      />
      {/* <h1>{artpiece}</h1> */}
      <CardMedia
        className={classes.media}
        image={artpiece.img_link}
        title={artpiece.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
