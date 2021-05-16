import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  rootContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  root: {
    minWidth: 275,
    maxWidth: "100%",
    margin: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 4px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 16,
  },
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  contactButton: {
    padding: "10px",
    "&:hover": {
      color: "green",
    },
  },
});

export { useStyles };
