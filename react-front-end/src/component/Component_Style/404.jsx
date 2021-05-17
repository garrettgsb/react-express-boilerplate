import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  page_container: {
    background: "#00007f",

    width: "100%",
    height: "100%",
    margin: "0",
    padding: "0",
    // paddingTop: "10%",
  },
  title_text: {
    background: "#00007f",
    margin: "0",
    paddingTop: "100px",
    // padding: "50px",
    // display: "flex",
    // flexDirection: "column",
    // alignSelf: "flex-end",
    // justifyContent: "center",
  },
  h2_text: {
    margin: "0",
    padding: "50px",
    paddingBottom: "0%",
    // flexDirection: "column",
    // display: "flex",
    // alignSelf: "flex-end",
    // justifyContent: "center",
  },
  deep_logo_container: {
    // border: "1px solid red",
    width: "auto",
    // paddingLeft: "30%",
    // paddingRight: "30%",

    // height: "40%",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    // position: "fixed",
    // top: 0,
    // position: "fixed",
    bottom: 0,
    // background: "#00007f",
  },
  image: {
    // border: "1px solid red",
    // flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  // main: {
  //   background: "#00007f",
  //   paddingBottom: "30px" /*whatever the height of your footer is*/,
  // },
});

export { useStyles };
