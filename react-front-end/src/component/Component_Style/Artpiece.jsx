import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    height: "auto",
    transition: "transform .2s" /* Animation */,

    "&:hover": {
      opacity: 0.9,
      transform: "scale(1.03)",
      // "z-index": "9999",
    },
  },
  media: {
    height: 350,
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

export { useStyles };
