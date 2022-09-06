// import { Card } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data';

export default function CourseDetails() {
  const { name } = useParams()
  console.log(data);
  const courseData = data.find(course => course.name.toLowerCase() === name.toLowerCase());

  console.log('courseData', courseData);

  return (
    <div>
      <div className='cards-title'>
      <div className="card">
        <img src="https://wallpaperaccess.com/full/1306038.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{courseData.name}</h5>
          <p className="card-text">{courseData.descriptions}</p>
          <a href={courseData.links} className="btn btn-primary">Reference</a>
        </div>
      </div>
    </div>
    </div>
  )
}