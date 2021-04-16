import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewsForm from './ReviewsForm';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Popup from './controls/Popup';
import './Reviews.css';
import FavouriteButton from "./Favourites/FavouriteButton";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


export default function ReviewsList(props) {
  const [review, setReview] = useState([])
  const [openPopup, setOpenPopup] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null)
  const classes = useStyles();
 
  useEffect(() => {
    axios.get('/api/reviews')
    .then(res => {
      console.log(res.data)
     setReview(res.data)
    })
  }, [])

  const handleRemove = (id, e) => {
    axios.delete(`/api/reviews/${id}`)
    .then(res => {
      console.log(res)
      console.log(res.data)

      setTimeout(() => {
        const newReview = review.filter(item => item.id !== id);
        setReview(newReview);
      }, 500)
    })
  }

  const handleEdit = (item) => {
    console.log("item: ", item)
    setRecordForEdit(item)
    setOpenPopup(true)
  }

  return (
    <div className="reviews-list-container">
      <div className="reviews-list-buttons">
        <Button
          type="Button"
          color="primary"
          variant="outlined"
          onClick = {() => setOpenPopup(true)}
        >
        Add new 
        </Button>
        <FavouriteButton />
      </div>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
      <ReviewsForm
        recordForEdit={recordForEdit}
      />
      </Popup>

        {review.map(item => 
          <Card variant="outlined" className="review-item" key={item.id}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Reviewed by:
            </Typography>
            <div className="review-item-top">
              <p>{item.title}</p>
              <h4>
                { item.building_rating ? <> {
                    [...Array(item.building_rating)].map(stars=>{
                        return <StarIcon color="yellow" />
                      })          
                  } </> : null
                }
              </h4>
            </div>
            <p>{item.comment}</p>
            {/* <p>Area rating: {item.area_rating}</p> */}
            <div className="review-item-bottom">
              <Button
                className={classes.button}
                type="button"
                variant="contained"
                color="primary"
                onClick={(e) => {handleEdit(item)}}
              >Edit
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={(e) => handleRemove(item.id, e)}
                variant="contained"
                color="secondary"
              >Delete
              </Button>
            </div>
            </CardContent>
          </Card>
        ).reverse()}
    </div>
  )
}