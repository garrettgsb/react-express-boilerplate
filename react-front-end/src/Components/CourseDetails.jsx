// import { Card } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data';
import axios from 'axios'

export default function CourseDetails(props) {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get('/resources')
      .then(res => {
        console.log(res)
        setResources(res.data)
      })
  }, [])

  // const { name } = useParams()
  // // console.log(data);
  // const courseData = data.find(course => course.name.toLowerCase() === name.toLowerCase());

  // console.log('courseData', courseData);

  const newResources = resources.map(resource => {
    return (
      <div className="card-body">
        <h5 className="card-title">{resource.step_description}</h5>
        <p className="card-text">{resource.article_url}</p>
        <a href={resource.video_url} className="btn btn-primary">Reference</a>
        <div>
          <img src={resource.photo_url} />
        </div>
      </div>
    )
  })

  return (
    <div>
      {newResources}
    </div>
  )
}