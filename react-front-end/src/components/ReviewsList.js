import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewsForm from './ReviewsForm';
import Button from '@material-ui/core/Button';

export default function ReviewsList() {

  const [state, setState] = useState([])
  useEffect(() => {
    axios.get('/api/reviews')
    .then(res => {
      console.log(res.data)
      setState(res.data)
    })
  }, [])

  const handleRemove = (id, e) => {
    axios.delete(`/api/reviews/${id}`)
    .then(res => {
      console.log(res)
      console.log(res.data)

      const newState = state.filter(item => item.id !== id);
      setState(newState);
    })
  }

  const handleEdit = (id) => {
    console.log(id)
  }

  return (
    <div className="ReviewsList">
      <ReviewsForm />
      <h1>Reviews List</h1>
        {state.map(item => 
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