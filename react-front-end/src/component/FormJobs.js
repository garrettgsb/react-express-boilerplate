import { PinDropSharp } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        size: "small",
      },
    },
  })
);

export default function FormJobs(props) {
  const classes = useStyles();

  const [title, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const [pay, setPay] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState({ id: 1 });

  useEffect(() => {
    setJob({ ...job, title, description, pay, company, location });
  }, [title, description, pay, company, location]);

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(event) => event.preventDefault()}
    >
      <TextField
        id="standard-basic"
        multiline={true}
        rows={1}
        type="text"
        value={title}
        variant="outlined"
        size="small"
        onChange={(e) => setNewTitle(e.target.value)}
        label="title"
        placeholder="Title"
      />
      <TextField
        id="filled-basic"
        multiline={true}
        rows={1}
        label="Filled"
        variant="outlined"
        size="small"
        type="textarea"
        value={description}
        onChange={(e) => setNewDescription(e.target.value)}
        label="description"
        placeholder="Description"
      />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        label="Outlined"
        variant="outlined"
        size="small"
        type="number"
        value={pay}
        onChange={(e) => setPay(e.target.value)}
        label="pay"
        placeholder="Wage/Salary"
      />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        label="Outlined"
        variant="outlined"
        size="small"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        label="Company"
        placeholder="Company Name"
      />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        label="Outlined"
        variant="outlined"
        size="small"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        label="location"
        placeholder="Location"
      />
      <button type="submit" value="Submit" onClick={() => props.onSubmit(job)}>
        Submit
      </button>
    </form>
  );
}
