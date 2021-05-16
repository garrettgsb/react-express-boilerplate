import React from "react";
import { useStyles } from "./Component_Style/Empty.jsx";

const Empty = (props) => {
  const classes = useStyles();

  return (
    <main className={classes.buttonContainer}>
      <img
        className={classes.button}
        src="../images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
    </main>
  );
};

export default Empty;
