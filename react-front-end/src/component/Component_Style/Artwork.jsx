import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 550,
    height: "auto",
    transition: "transform .2s" /* Animation */,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",

    "&:hover": {
      opacity: 0.8,
      transform: "scale(1.03)",
      background: "#C9A1BE",
      // "z-index": "9999",
    },
  },
  media: {
    // border: "1px solid red",
    height: 350,
  },
  text: {
    width: "100%",
    height: "100%",
    color: "white",
    fontSize: 35,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    opacity: 0,
    alignSelf: "center",
    justifySelf: "center",
    paddingTop: "40%",
    // border: "1px solid red",

    "&:hover": {
      // background: "#B9A1BE",
      opacity: 1,
    },
  },
  editDeleteButtons: {
    minWidth: "5px",
    Width: "10px",
  },
  deleteButton: {
    "&:hover": {
      color: "red",
    },
  },
  editButton: {
    "&:hover": {
      color: "green",
    },
  },
});

export { useStyles };
