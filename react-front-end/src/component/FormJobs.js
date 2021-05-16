import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./Component_Style/FormJobs.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import clsx from "clsx";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& > *": {
//         margin: theme.spacing(1),
//         width: "25ch",
//         size: "small",
//       },
//     },
//   })
// );

export default function FormJobs(props) {
  const classes = useStyles();


  const [state, setState] = useState({
    id: props.activeUser,
    title: "",
    description: "",
    pay: 0,
    company: "",
    location: "",
  });

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(event) => event.preventDefault()}
    >
      <br />
      <TextField
        id="standard-basic"
        multiline={true}
        rows={1}
        type="text"
        variant="outlined"
        size="small"
        value={state.title}
        onChange={(e) => setState({ ...state, title: e.target.value })}
        label="Title"
        placeholder="Title"
      />
      <TextField
        id="filled-basic"
        multiline={true}
        rows={1}
        variant="outlined"
        size="small"
        type="textarea"
        value={state.description}
        onChange={(e) => setState({ ...state, description: e.target.value })}
        label="Description"
        placeholder="Description"
      />
      <TextField
        className={clsx(
          classes.margin,
          classes.textField,
          classes.withoutLabel
        )}
        id="outlined-basic"
        multiline={true}
        rows={1}
        variant="outlined"
        size="small"
        type="number"
        value={state.pay}
        onChange={(e) => setState({ ...state, pay: e.target.value })}
        label="Pay"
        placeholder="Wage/Salary"
      />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        variant="outlined"
        size="small"
        type="text"
        value={state.company}
        onChange={(e) => setState({ ...state, company: e.target.value })}
        label="Company"
        placeholder="Company Name"
      />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        variant="outlined"
        size="small"
        type="text"
        value={state.location}
        onChange={(e) => setState({ ...state, location: e.target.value })}
        label="Location"
        placeholder="Location"
      />

      <button
        type="submit"
        value="Submit"
        onClick={() => props.onSubmit(state)}
      >
        Submit
      </button>
      <button type="button" value="Cancel" onClick={() => props.onCancel()}>
        Cancel
      </button>

    </form>
  );
}
