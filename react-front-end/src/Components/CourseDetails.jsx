// import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Steptracker from './Steptracker';

export default function CourseDetails(props) {
  const [resources, setResources] = useState([]);
  const { name } = useParams()
  // const [deleting, setDeleting] = useState(false);
  const [edit, setEdit] = useState();
  const [step, setStep] = useState()
  const [post, setPost] = useState(null)

  console.log('PROPS', props)

  useEffect(() => {
    axios.get(`/resources/${name}`)
      .then(res => {
        console.log('All Resources', res.data)
        setResources(res.data)
      })

  }, [])

  const handleDelete = (id) => {
    // setDeleting(true)
    setStep()
    axios.delete(`/resources/${id}`)
      .then(() => {
        setResources(resources.filter((resource) => {
          return resource.id != id;
        }))
      })
  }

  const handleEdit = () => {

  }

  // // console.log(data);
  // const courseData = data.find(course => course.name.toLowerCase() === name.toLowerCase());

  // console.log('courseData', courseData);

  const newResources = resources.map((resource) => {
    console.log('Resource', resource)
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
              <div className='delete'>
                <button onClick={() => handleDelete(resource.id)} className="btn btn-primary">Delete</button>
              </div>
              <div className='edit'>
                <button onClick={handleEdit} className="btn btn-primary">Edit</button>
              </div>
              <div>
                <a href='/create-course'>
                  <button type='button' className='btn btn-primary'>Add More Resources</button>
                </a>
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



