import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

function CreateCourse(props) {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [article, setArticle] = useState('');
  const [img, setImg] = useState('');
  const [video, setVideo] = useState('');
  const [step, setStep] = useState();

  const navigate = useNavigate();

  const handleClick = () => {
    axios.post('/subjects', {
      subject: subject
    }).then((result) => {
      axios.post('/resources', {
        description: description,
        article: article,
        img: img,
        video: video,
        step: step,
        id: result.data[0].id
      })
      .then(() => {
        navigate('/')
      })
    })
  }

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Subject Name</label>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} name='subject' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Step Number</label>
        <input value={step} onChange={(e) => setStep(e.target.value)} name='step' type="number" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} name='description' type="text" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label className="form-label">Article Reference</label>
        <input value={article} onChange={(e) => setArticle(e.target.value)} name='article' type="url" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label className="form-label">Image Reference</label>
        <input value={img} onChange={(e) => setImg(e.target.value)} name='img' type="url" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label className="form-label">Video Reference</label>
        <input value={video} onChange={(e) => setVideo(e.target.value)} name='video' type="text" className="form-control" id="exampleInputPassword1" />
      </div>
      <button onClick={handleClick} type="button" className="btn btn-primary">Submit</button>
    </div>
  )
}

export default CreateCourse