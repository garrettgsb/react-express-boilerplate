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
      <h1>{name}</h1>
      <a href={courseData.links[0]}>ss</a>
      <h3>{courseData.descriptions}</h3>
      <h3>{courseData.videos}</h3>
    </div>
  )
}