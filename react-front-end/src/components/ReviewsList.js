import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewsForm from './ReviewsForm';
import Button from '@material-ui/core/Button';
import Popup from './controls/Popup';

export default function ReviewsList() {
  const [review, setReview] = useState([])
  const [openPopup, setOpenPopup] = useState(false)

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

      const newReview = review.filter(item => item.id !== id);
      setReview(newReview);
    })
  }

  const handleEdit = (id) => {
    console.log(id)
  }

  return (
    <div className="ReviewsList">
      <Button
        type="Button"
        color="primary"
        variant="outlined"
        onClick = {() => setOpenPopup(true)}
      >
      Add new 
      </Button>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
      <ReviewsForm />
      </Popup>

      <h1>Reviews List</h1>
        {review.map(item => 
          <div className="review-item" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.comment}</p>
            <p>Building rating: {item.building_rating}</p>
            <p>Area rating: {item.area_rating}</p>
            <Button
              type="button"
              onClick={(e) => handleRemove(item.id, e)}
              variant="contained"
              color="secondary"
            >Delete
            </Button>
            <Button
              type="button"
              onClick={(e) => handleEdit(item.id, e)}
              variant="contained"
              color="primary"
            >Edit
            </Button>
          </div>
        ).reverse()}
    </div>
  )
}