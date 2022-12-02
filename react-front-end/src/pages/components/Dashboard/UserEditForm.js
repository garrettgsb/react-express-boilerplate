import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export const UserEditForm = (props) => {
  const classes = useStyles();
  const [goal, setGoal] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [goalError, setGoalError] = useState(false);
  const [currentWeightError, setCurrentWeightError] = useState(false);
  const [goalWeightError, setGoalWeightError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentWeightError(false);
    setGoalError(false);
    setCurrentWeightError(false);
    if (goal === "") {
      setGoalError(true);
    }
    if (currentWeight === "") {
      setCurrentWeightError(true);
    }
    if (goalWeight === "") {
      setGoalWeightError(true);
    }
    if (goal && currentWeight && goalWeight) {
      Axios.put(`/api/dashboard`, { goal, currentWeight, goalWeight })
        .then((result) => {
          useNavigate(0);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  if(!props.show) {
    return <></>
  }

  return (
    <Container size="sm">
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Update Information
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setGoal(e.target.value)}
          label="Goal"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={goalError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setCurrentWeight(e.target.value)}
          label="Current Weight"
          variant="outlined"
          color="secondary"
          type="number"
          multiline
          rows={4}
          fullWidth
          required
          error={currentWeightError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setGoalWeight(e.target.value)}
          label="Goal Weight"
          variant="outlined"
          color="secondary"
          type="number"
          multiline
          rows={4}
          fullWidth
          required
          error={goalWeightError}
        />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};
