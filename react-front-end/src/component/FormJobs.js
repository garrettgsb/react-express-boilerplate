import React, { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./Component_Style/FormJobs.jsx";

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

  const [title, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const [pay, setPay] = useState(0);
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState({ id: props.activeUser });

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
