import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";

import axios from "axios";

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

const initialFormData = {
  title: "",
  area_rating: "",
  comment: "",
  recommend_to_friend: false,
  landlord_rating: false,
  building_rating: "",
};

export default function ReviewsForm(props) {
  let { buildingId } = useParams();
  const { recordForEdit } = props

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleCheckbox = (e) => {
    updateFormData({
      ...formData, 
      [e.target.name]: e.target.checked
    })
  }

  const handlePost = async (e) => { 
    e.preventDefault();
    const body = {
      title: formData.title, 
      comment: formData.comment,
      landlord_rating: formData.landlord_rating,
      recommend_to_friend: formData.recommend_to_friend,
      building_rating: parseInt(formData.building_rating),
      area_rating: parseInt(formData.area_rating),
      building_id: parseInt(buildingId),
      user_id: 11
    }
    try {
      const { data } = await axios.post(`/api/reviews`, body)
      console.log('>>data', data)
      window.location.reload()
    } catch (error) {
      console.log('>>error', error)
    }
  }

  const handlePostEdit = async (reviewId, e) => { 
    e.preventDefault();
    const body = {
      review_id: recordForEdit.review_id,
      title: formData.title, 
      comment: formData.comment,
      landlord_rating: formData.landlord_rating,
      recommend_to_friend: formData.recommend_to_friend,
      building_rating: parseInt(formData.building_rating),
      area_rating: parseInt(formData.area_rating),
      building_id: parseInt(buildingId),
      user_id: 11
    }
    try {
      const { data } = await axios.put(`/api/reviews/${reviewId}`, body)
      console.log('>>data', data)
      window.location.reload()
    } catch (error) {
      console.log('>>error', error)
    }
  }

  // const handlePostEdit2 = (id, e) => {
  //   e.preventDefault();

  //   axios(`/api/reviews/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     data: formData,
  //   })
  //     .then((res) => res.data)
  //     .then(window.location.reload())
  //     .catch((error) => {
  //       throw error;
  //     });
  // };

  const handleSubmit = (e) => {
    if (recordForEdit !== null) {
      handlePostEdit(recordForEdit.review_id, e);
    } else {
      // alert("hello from form ReviewsForm.js handleSubmit")
      handlePost(e);
    }
  };

  useEffect(() => {
    if (recordForEdit !== null)
      updateFormData({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Write a review!
        </Typography>
        <form
          method="POST"
          autoComplete="off"
          action="/api/reviews"
          onSubmit={handleSubmit}
          className={classes.form}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControlLabel
                value={formData.landlord_rating}
                control={<Checkbox color="primary" />}
                label="Approve of landlord?"
                labelPlacement="end"
                name="landlord_rating"
                type="boolean"
                onChange={handleCheckbox}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                value={formData.recommend_to_friend}
                control={<Checkbox color="primary" />}
                label="Recommend to friend"
                labelPlacement="end"
                name="recommend_to_friend"
                type="boolean"
                onChange={handleCheckbox}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              Building Rating
              <Rating
                value={formData.building_rating}
                type="number"
                name="building_rating"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              Area Rating
              <Rating
                value={formData.area_rating}
                type="number"
                name="area_rating"
                defaultValue={3}
                precision={1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                defaultValue={formData.title}
                type="text"
                variant="outlined"
                required
                fullWidth
                name="title"
                label="Title of review"
                id="title"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                defaultValue={formData.comment}
                variant="outlined"
                required
                type="text"
                fullWidth
                multiline
                rows={5}
                rowsMax={10}
                label="Write a review"
                name="comment"
                onChange={handleChange}
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
