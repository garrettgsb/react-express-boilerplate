import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "#00007f",
    padding: theme.spacing(1),
    // [theme.breakpoints.down("sm")]: {
    //   display: "flex",
    //   flexDirection: "column",
    // },
    // [theme.breakpoints.up("md")]: {
    //   display: "flex",
    //   flexDirection: "column",
    // },
  },
  page_container: {
    background: "#00007f",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%%",
    height: "100%",
    margin: "0",
    padding: "0",
    paddingTop: "20%",
    paddingLeft: "12%",
    marginRight: "-50px",
    zIndex: "1",
  },
  title_text: {
    background: "#00007f",
    margin: "0",
    color: "lavender",
  },
  h2_text: {
    margin: "0",
    paddingTop: "50px",
    paddingBottom: "0%",
    color: "lavender",
  },
  deep_logo_container: {
    width: "auto",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    bottom: 0,
  },
  image: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  go_home_text: {
    paddingTop: "0px",
    margin: "0px",
    textDecoration: "none",
    alignSelf: "flex-end",
    textAlign: "left",
    color: "white",
    "&:hover": {
      color: "#B9A1BE",
    },
  },
  fish_hook_container: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "35%",
    width: "10%",
    paddingBottom: "50px",
    justifySelf: "flex-end",
    // background: "#00007f",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  link_container: {
    // background: "#00007f",
    // display: "flex",
    // justifySelf: "flex-start",
    // marginLeft: "-100px",
    // zIndex: "-1",
  },
  // main: {
  //   background: "#00007f",
  //   paddingBottom: "30px" /*whatever the height of your footer is*/,
  // },
}));

export { useStyles };
