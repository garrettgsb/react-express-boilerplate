import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingBottom: "50px",
    paddingTop: "50px",
  },
  rootUserInfo: {
    // minWidth: 275,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "550",
    height: 388,
    background: "#696969",
    color: "lavender",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    color: "lavender",
  },
  title: {
    fontSize: 24,
    color: "lavender",
    fontStyle: "bold",
  },
  username: {
    fontSize: 20,
    color: "lavender",
    paddingBottom: "25px",
  },
  description: {
    fontSize: 14,
    color: "lavender",
    paddingBottom: "25px",
  },
  pos: {
    marginBottom: 12,
    color: "lavender",
  },
  link: {
    color: "lavender",
  },
  websiteLink: {
    padding: "20px",
  },
}));

export { useStyles };
