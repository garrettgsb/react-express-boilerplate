import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    "&:hover": {
      opacity: 0.9,
    },
  },
  media: {
    height: 220,
  },
  text: {
    color: "lavender",
    fontSize: 35,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    opacity: 0,

    "&:hover": {
      background: "black",
      opacity: 0.7,
    },
  },
});

export default function Artwork(props) {
  // const Image = styled.img`
  //   opacity: 1;
  //   display: block;
  //   width: 100%;
  //   height: auto;
  //   transition: .5s ease;
  //   backface-visibility: hidden;

  //   "&:hover": {
  //     background: "#efefef",
  //     opacity: "0.3",
  //   },
  // `;
  // const Details = styled.div`
  //   transition: .5s ease;
  //   opacity: 0;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   -ms-transform: translate(-50%, -50%);
  //   text-align: center;

  //   "&:hover": {
  //     background: "#696969",
  //     opacity: "1"
  //   },
  // `;
  // const Container = styled.div`
  //   position: relative;
  //   width: 50%;
  // `;

  // const Text = styled.div`
  //   background-color: #04aa6d;
  //   color: white;
  //   font-size: 16px;
  //   padding: 16px 32px;
  // `;

  //.container:hover .image {
  //     opacity: 0.3;
  //   }

  //   .container:hover .middle {
  //     opacity: 1;
  //   }

  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
      {/* <CardActions>
        <Button size="small" color="primary">
          <a href={props.url}>Learn More</a>
        </Button>
      </CardActions> */}
    </Card>
  );
}

// // export default function Artwork(props) {
//   .container {
//     position: relative;
//     width: 50%;
//   }

//   .image {
//     opacity: 1;
//     display: block;
//     width: 100%;
//     height: auto;
//     transition: .5s ease;
//     backface-visibility: hidden;
//   }

//   .middle {
//     transition: .5s ease;
//     opacity: 0;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);
//     text-align: center;
//   }

//   .container:hover .image {
//     opacity: 0.3;
//   }

//   .container:hover .middle {
//     opacity: 1;
//   }

//   .text {
//     background-color: #04AA6D;
//     color: white;
//     font-size: 16px;
//     padding: 16px 32px;
//   }

// return (
//   <div>
//     <style
//       dangerouslySetInnerHTML={{
//         __html:
//           "\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  backface-visibility: hidden;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 0.8;\n}\n\n.text {\n  background-color: #696969;\n  color: lavender;\n  font-size: 20px;\n  padding: 16px 32px;\n}\n",
//       }}
//     />
//     <div className="container">
//       <img
//         src={props.image}
//         alt="Avatar"
//         className="image"
//         style={{ width: "100%" }}
//       />
//       <div className="middle">
//         <div className="text">{props.title}</div>
//         <div className="text">{props.username}</div>
//         <div className="text">${props.price}</div>
//       </div>
//     </div>
//   </div>
//   );
// }
