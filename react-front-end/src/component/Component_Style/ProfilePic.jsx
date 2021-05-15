import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "550",
    height: "auto",
    "&:hover": {
      opacity: 0.9,
    },
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
});

export { useStyles };
