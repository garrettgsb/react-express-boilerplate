import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootLeftButton: {
    maxWidth: 345,
  },
  mediaLeftButton: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expandLeftButton: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  root: {
    maxWidth: "550",
    height: "auto",
    "&:hover": {
      opacity: 0.9,
    },
    background: "lavender",
  },
  media: {
    height: 350,
  },
  container: {
    width: "100%",
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "50px",
  },
  usernameAndButtonContainer: {
    display: "flex",
    flexDirection: "Row",
    justifyContent: "space-between",
    paddingTop: "2px",
    paddingBottom: "0px",
    // alignContent: "space-between",
  },
  username: {
    fontSize: 26,
  },
}));

export { useStyles };
