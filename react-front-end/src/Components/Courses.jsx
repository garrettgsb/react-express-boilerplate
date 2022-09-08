import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/courses.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageDescription from './PageDescription';
import 'react-bootstrap'
import data from '../data';
import axios from 'axios'


export default function Courses(props) {
  const [subjects, setSubjects] = useState([]);

  useEffect(()=>{
    axios.get('/subjects')
    .then(res =>{
      console.log(res)
      setSubjects(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
  }, [])


  const newDataLimit = subjects.map((category) => {
    return (
      <div>
        <Link className='text-newDataLimit' to={`/course/${category.subject_name.toLowerCase()}`}>{category.subject_name}</Link>

      </div>
    );
  })
  const newData = subjects.slice(0, 5).map((category) => {
    return (
      <div>
        <Link className='text-newData' to={`/course/${category.subject_name.toLowerCase()}`}>{category.subject_name}</Link>
      </div>
    );
  })

  return (
    <div className='container'>
      <div className='row'>

        <Container className='container'>
          <Row className='all-categories' >
            <Col xs={2} className='border border-3 side-categories'>
              {newDataLimit}
            </Col>
            <Col xs={10}>
              <div className='row px-0 page-description'>
                <PageDescription />
              </div>
              <div className='fav-categories'>{newData}</div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}