// import { Card } from '@mui/material';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Steptracker from './Steptracker';
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/course-details.css';


export default function CourseDetails(props) {
  const { name } = useParams()
  // const [edit, setEdit] = useState();
  // const [step, setStep] = useState();

  useEffect(() => {
    axios.get(`/resources/${name}`)
      .then(res => {
        props.setResources(res.data)
      })
  }, [])

  const handleDelete = (id) => {
    // setStep()
    axios.delete(`/resources/${id}`)
      .then(() => {
        props.setResources(props.resources.filter((resource) => {
          return resource.id !== id;
        }))
      })
  }

  const newResources = props.resources.map((resource) => {
    const pathToResourceEdit = `/edit-resource/${resource.id}`;
    return (
      <div key={resource.id} className='card col-sm-12 col-md-6 col-lg-4 p-5'>
        <div className="card-body">
          <div className='step-and-description'>
            <div className='step display-4'>{resource.step_number}</div>
            <h5 className="description card-title">{resource.step_description}</h5>
          </div>
        <div>
        <img className='card-img-top' src={resource.photo_url} alt='' />
        </div>

          <div>
          <a href={resource.article_url} className="article-link" target="_blank">Interested To Learn More? Click This Article</a>
          </div>
          <div className='video'>
            <iframe className='video2' title="myFrame" src={resource.video_url}></iframe>
          </div>


          <div className='step-tracker'>
            <Steptracker resource_id={resource.id} />
          </div>
          <div className='admin-form'>
            {props.admin &&
              <div className='edit-and-delete'>
                <div className='edit'>
                  <Link to={pathToResourceEdit}>
                    <button className="edit-button">Edit</button>
                  </Link>
                </div>
                <div className='delete'>
                  <button onClick={() => handleDelete(resource.id)} className="delete-button">Delete</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='container'>
      <div className='row'>
        {newResources}
      </div>
      {props.admin &&
        <div>
          <Link to='/create-course'>
            <button type='button' className='create-button'>Add Resources</button>
          </Link>
        </div>
      }
    </div>
  )
}



