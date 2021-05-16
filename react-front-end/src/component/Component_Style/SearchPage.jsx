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
      border: "1px solid lavender",
      borderRadius: theme.shape.borderRadius,
    },
    searchButton: {
      width: "20ch",
      padding: "8px",
      border: "1px solid lavender",
      color: "lavender",
    },
  })
);

export { useStyles };
