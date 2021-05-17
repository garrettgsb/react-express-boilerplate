import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: "1.15%",
        width: "25ch",
        size: "small",
      },
      paddingTop: "2.5%",
      paddingBottom: "2%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "lavender",
      borderRadius: "0.5%",
    },
  })
);

export { useStyles };
