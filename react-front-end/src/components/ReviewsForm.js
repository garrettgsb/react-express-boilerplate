import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Rating from "@material-ui/lab/Rating";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ReviewsForm() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Write a review!
        </Typography>
        <form method="POST" className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                value="false"
                control={<Checkbox color="primary" />}
                label="Approve the landlord?"
                labelPlacement="end"
                name="landord_rating"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                value="false"
                control={<Checkbox color="primary" />}
                label="Recommend to friend"
                labelPlacement="end"
                name="recommend_to_friend"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              Building Rating
              <Rating
                type="number"
                name="building_rating"
                defaultValue={3}
                precision={1}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              Area Rating
              <Rating
                type="number"
                name="area_rating"
                defaultValue={3}
                precision={1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="title"
                label="Title of review"
                id="title"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={5}
                rowsMax={10}
                label="Write a review"
                name="comment"
              />
            </Grid>
          </Grid>
          <Button
            item
            xs={12}
            type="submit"
            variant="contained"
            color="default"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
