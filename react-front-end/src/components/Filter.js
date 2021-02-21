import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  buttons: {
    display: "flex",
  },
  
}));

export default function Filter(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    dateBegin: "",
    dateEnd: "",
    language: "",
    repoName: "",
  });

  const clear = () => {
    setState((prev) => ({
      dateBegin: "",
      dateEnd: "",
      language: "",
      repoName: "",
    }));
  };

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
            style: {
              fontSize: 20
            }
          }}
        />
      </div>
      <div>
        <TextField
          onChange={setBegin}
          label="Last Updated After"
          type="date"
          value={state.dateBegin}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: 20
            }
          }}
        />
        <TextField
          onChange={setEnd}
          label="Last Updated Before"
          type="date"
          value={state.dateEnd}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
            style: {
              fontSize: 20
            }
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
            style: {
              fontSize: 20
            }
          }}
        />
      </div>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            props.setFilter(state);
          }}
        >
          Filter
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => {
            clear();
            props.setFilter({
              dateBegin: "",
              dateEnd: "",
              language: "",
              repoName: "",
            });
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}
