import React from "react";

import LazyHero from "react-lazy-hero";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {},
// });

// export default function Hero() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardMedia
//         component="img"
//         alt="Contemplative Reptile"
//         height="140"
//         image={require("../../public/images/7699.jpg")}
//         title="Contemplative Reptile"
//       />
//     </Card>
//   );
// }

// const Hero = (props) => {
// const width = window.innerWidth;
// const height = window.innerHeight;
// const style = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   "min-width": "100%",
//   "min-height": "100%",
// };
// return (
//   <div style={style}>
//     <img
//       src={`https://unsplash.it/${width}/${height}?image=${props.number}`}
//       style={style}
//     />
//   </div>
// );

const Hero = (props) => {
  return (
    <div>
      <LazyHero
        // imageSrc="https://unsplash.it/2000/1000"
        // imageSrc="https://tattoodo-mobile-app.imgix.net/images/news_uploads/2020/03/PiA7UOzWUlxExYCz5DewAwyYs9LuexhOgUHqROdN.jpg?auto=format%2Ccompress&auto=format%2Ccompress&fit=crop&w=1200"
        imageSrc="https://i.redd.it/vldnjy3c2fg51.png"
        // image="https://i.pinimg.com/originals/78/a9/fd/78a9fd65365a4ff9171acd7e8f458e94.jpg"
        isFixed="false"
        opacity="0.5"
        // children="<Logo/>"
        // className=""
        // color="#fff"
        // imageSrc=""
        isCentered="true"
        // minHeight="75vh"
        parallaxOffset="100"
        // style={overflow:"hidden"}
        // transitionDuration="600"
        // transitionTimingFuction="ease-in-out"
      >
        <h1>Generic Startup Hype Headline</h1>
      </LazyHero>

      {/* ... */}
    </div>
  );
};
export default Hero;
