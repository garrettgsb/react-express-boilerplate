import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        // margin: theme.spacing(1),
        // width: "25ch",
        size: "small",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "lavender",
        },
      },
      background: "white",
      marginBottom: "4%",
      paddingBottom: "2%",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  })
);

export { useStyles };
