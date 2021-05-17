import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "90%",
    margin: "5%",
    // maxWidth: 550,
    height: "auto",
    transition: "transform .2s" /* Animation */,

    "&:hover": {
      opacity: 0.9,
      transform: "scale(1.03)",
      // "z-index": "9999",
    },
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
  title: {
    fontSize: 35,
  },
  author: {
    fontSize: 28,
  },
  description: {
    fontSize: 20,
  },
  info_card: {
    marginTop: "-30px",
  },
}));

export { useStyles };
