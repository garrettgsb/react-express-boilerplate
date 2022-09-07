import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/courses.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageDescription from './PageDescription';
import 'react-bootstrap'
import data from '../data';

export default function Courses(props) {
  const newDataLimit = props.data.map((category) => {
    return (
      <div>
        <Link className='text-newDataLimit' to={`/course/${category.name.toLowerCase()}`}>{category.name}</Link>

      </div>
    );
  })
  const newData = props.data.map((category) => {
    return (
      <div>
        <Link className='text-newData' to={`/course/${category.name.toLowerCase()}`}>{category.name}</Link>
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