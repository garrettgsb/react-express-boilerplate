import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({});

const useStyles = makeStyles({
  toolbar: theme.mixins.toolbar,
});

const Layout = (props) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.toolbar}></div>
      {props.children}
    </ThemeProvider>
  );
};

export default Layout;
