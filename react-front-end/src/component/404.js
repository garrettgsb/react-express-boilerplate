import React from "react";
import Navbar from "./Navbar";
import { useStyles } from "./Component_Style/404";

export default function ErrorPage() {
  const classes = useStyles();

  return (
    <div className={classes.page_container}>
      <div className={classes.text_container}>
        <h1 className={classes.title_text}>Lost!</h1>

        <h2 className={classes.h2_text}>
          404. Sorry we lost you. Let's get you out of the deep!
        </h2>
      </div>
      <div className={classes.deep_logo_container}>
        <img
          className={classes.image}
          src="../images/deep.png"
          alt="404_page"
          // onClick={props.onAdd}
        />
      </div>
    </div>
  );
}
