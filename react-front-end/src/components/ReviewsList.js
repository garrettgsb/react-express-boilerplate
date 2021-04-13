import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewsForm from './ReviewsForm';

export default function ReviewsList() {
  const [state, setState] = useState([])
  useEffect(() => {
    axios.get('/api/reviews')
    .then(res => {
      console.log(res.data)
      setState(res.data)
    })
  }, [])
  return (
    <div className="ReviewsList">
      <ReviewsForm />
      <h1>Reviews List</h1>
        {state.map(item => 
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.comment}</p>
            <p>Building rating: {item.building_rating}</p>
            <p>Area rating: {item.area_rating}</p>
          </div>
        ).reverse()}
    </div>
  )
}