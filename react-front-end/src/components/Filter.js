import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: 200,
  },
  button:{
    marginTop: theme.spacing(1),
  }
}));

export default function Filter(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    dateBegin: "",
    dateEnd: "",
    language: "",
    repoName: "",
  });

  const setBegin = (event) => {
    const value = event.target.value;
    setState((prev) => ({ ...prev, dateBegin: value }));
  };
  const setEnd = (event) => {
    const value = event.target.value;
    setState((prev) => ({ ...prev, dateEnd: value }));
  };
  const setLanguage = (event) => {
    const value = event.target.value;
    setState((prev) => ({ ...prev, language: value }));
  };
  const setRepoName = (event) => {
    const value = event.target.value;
    setState((prev) => ({ ...prev, repoName: value }));
  };
  const filter = () =>{
    console.log(state)
  };

  return (
    <div className={classes.container}>
      <div>
        <TextField
          onChange={setRepoName}
          label="Repository Name"
          type="text"
          value={state.repoName}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
          onChange={setBegin}
          label="Created After"
          type="date"
          defaultValue={state.dateBegin}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          onChange={setEnd}
          label="Created Before"
          type="date"
          defaultValue={state.dateEnd}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <TextField
          onChange={setLanguage}
          label="Language"
          type="text"
          value={state.language}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={filter}>
          Filter
        </Button>
      </div>
    </div>
  );
}
