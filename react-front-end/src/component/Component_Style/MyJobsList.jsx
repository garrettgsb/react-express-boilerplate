import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
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
  titleRowText: {
    fontWeight: "900",
    fontSize: "18px",
    textDecoration: "underline",
  },
  titleRow: {
    // border: "1px solid grey",
  },
});

export { useStyles };
