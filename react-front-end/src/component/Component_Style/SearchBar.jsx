import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        size: "small",
      },
    },
    textField: {
      border: "1px solid #B9A1BE",
      borderRadius: theme.shape.borderRadius,
      color: "#B9A1BE",
    },
    searchButton: {
      width: "20ch",
      padding: "8px",
      border: "1px solid #B9A1BE",
      color: "#B9A1BE",
    },
    searchField: {
      color: "white",
    },
  })
);

export { useStyles };
