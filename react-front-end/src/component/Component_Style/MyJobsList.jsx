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
});

export { useStyles };
