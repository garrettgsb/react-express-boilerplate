import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    width: "20%",
    height: "auto",
  },
});

export { useStyles };
