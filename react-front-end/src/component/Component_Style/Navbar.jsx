import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar_container: {
    width: "100%",
    zIndex: "5",
    position: "fixed",
  },
  grow: {
    flexGrow: 1,
    top: 0,
    position: "fixed",
    width: "100%",
  },
  toolbar: {
    // display: "flex",
    justifyContent: "space-between",
    zIndex: "100",
  },
  search_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nav_buttons_container: {
    // border: "1px solid lavender",
    alignSelf: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  logo: {
    width: "50px",
    height: "auto",
    marginTop: "6px",
    marginRight: "20px",
    alignSelf: "flex-start",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    menuPaper: {
      // backgroundColor: "lightblue",
    },
    menu: {
      "& .MuiList-root.MuiMenu-list.MuiList-padding": {
        backgroundColor: "blue",
      },
    },
  },
}));

export { useStyles };
