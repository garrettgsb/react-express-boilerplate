// import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Steptracker from './Steptracker';
import { Link } from "react-router-dom";


export default function CourseDetails(props) {
  // const [resources, props.setResources] = useState([]);
  const { name } = useParams()
  console.log("NAME", name)
  const [edit, setEdit] = useState();
  const [step, setStep] = useState()
  const [post, setPost] = useState(null)

  console.log('PROPS', props)

  useEffect(() => {
    axios.get(`/resources/${name}`)
      .then(res => {
        console.log('All Resources', res.data)
        props.setResources(res.data)
      })
  }, [])

  const handleDelete = (id) => {
    setStep()
    axios.delete(`/resources/${id}`)
      .then(() => {
        props.setResources(props.resources.filter((resource) => {
          return resource.id != id;
        }))
      })
  }

  // // console.log(data);
  // const courseData = data.find(course => course.name.toLowerCase() === name.toLowerCase());

  // console.log('courseData', courseData);

  const newResources = props.resources.map((resource) => {
    console.log('Resource', resource);
    const pathToResourceEdit = `/edit-resource/${resource.id}`;
    return (
      <div className="card-body" key={resource.id}>
        <div>{resource.step_number}</div>
        <h5 className="card-title">{resource.step_description}</h5>
        <p className="card-text">{resource.article_url}</p>
        <iframe src={resource.video_url}></iframe>
        <div>
          <img src={resource.photo_url} alt='' />
        </div>
        <Steptracker />


        <div className='admin-form'>
          {props.admin &&
            <div>
              <div className='edit'>
                <Link to={pathToResourceEdit}>
                  <button className="btn btn-primary">Edit</button>
                </Link>
              </div>
              <div className='delete'>
                <button onClick={() => handleDelete(resource.id)} className="btn btn-primary">Delete</button>
              </div>
              <div>
                <Link to='/create-course'>
                  <button type='button' className='btn btn-primary'>Add More Resources</button>
                </Link>
              </div>
            </div>
          }
        </div>
      </div>
    )
  })

  return (
    <div>

      <div>
        {newResources}
      </div>

    </div>
  )
}



