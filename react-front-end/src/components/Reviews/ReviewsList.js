import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import ReviewsForm from "./ReviewsForm";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import Typography from "@material-ui/core/Typography";
import Popup from "../controls/Popup";
import "./Reviews.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },

  starRating: {
    fill: "#61dafb",
  },
}));

export default function ReviewsList(props) {
  const [review, setReview] = useState([]);
  // const [reviews, setReviews] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const classes = useStyles();

  console.log("ReviewsList.js recordForedit:", recordForEdit);

  const { buildingId } = useParams();

  useEffect(() => {
    axios.get(`/api/reviews/${buildingId}`).then((res) => {
      // console.log('reviewslist GET axios', res)
      setReview(res.data);
    });
  }, []);

  // Handles 'Back to Map' button
  const history = useHistory();
  const handleClick = () => {
    history.push("/map");
  };

  // Handles delete button on review
  const handleRemove = (review_id, e) => {
    axios.delete(`/api/reviews/${review_id}`).then((res) => {
      setTimeout(() => {
        const newReview = review.filter((item) => item.review_id !== review_id);
        setReview(newReview);
      }, 500);
      window.location.reload();
    });
  };

  // Handles edit button on review
  const handleEdit = (item) => {
    console.log("item: ", item);
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const currentUser = 11;

  return (
    <div className="reviews-list-container">
      <div className="reviews-list-buttons">
        <Button
          type="Button"
          color="primary"
          variant="outlined"
          onClick={handleClick}
        >
        <ArrowBackOutlinedIcon></ArrowBackOutlinedIcon>
          Back to Map
        </Button>
        <Button
          type="Button"
          color="primary"
          variant="outlined"
          onClick={() => {
            setOpenPopup(true);
            setRecordForEdit(null);
          }}
        >
        <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
           Add review
        </Button>
      </div>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <ReviewsForm recordForEdit={recordForEdit} />
      </Popup>

      {review.map((item) => (
        <Card key={item.review_id} variant="outlined" className="review-item">
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Reviewed by: {item.username}
            </Typography>
            <div className="review-item-top">
              <p>{item.title}</p>
              <h4>
                {item.building_rating ? (
                  <>
                    {" "}
                    {[...Array(item.building_rating)].map((stars, index) => {
                      return (
                        <StarIcon className={classes.starRating} key={index} />
                      );
                    })}{" "}
                  </>
                ) : null}
              </h4>
            </div>
            <p>{item.comment}</p>

            <div className="review-item-bottom">
              {currentUser === item.user_id ? (
                <>
                  <Button
                    className={classes.button}
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      handleEdit(item);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    className={classes.button}
                    type="button"
                    onClick={(e) => handleRemove(item.review_id, e)}
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </>
              ) : (
                ""
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
