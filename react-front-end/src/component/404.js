import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./Component_Style/404";

export default function ErrorPage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div className={classes.container_container}>
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
              alt="404_squid"
              // onClick={props.onAdd}
            />
          </div>
        </div>
        <Link className={classes.link_container} to="/">
          <div className={classes.fish_hook_container}>
            <img
              className={classes.fish_hook}
              src="../images/fish_hook.png"
              alt="fish_hook"
            />
            <h2 className={classes.go_home_text}>Go back home.</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
