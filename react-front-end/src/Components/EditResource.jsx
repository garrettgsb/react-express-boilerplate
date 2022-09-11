import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function EditResource(props) {
  const params  = useParams();
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [article, setArticle] = useState('');
  const [img, setImg] = useState('');
  const [video, setVideo] = useState('');
  const navigate = useNavigate();

  console.log("PARAMS", params)

  const handleClick = (id) => {
    console.log('id', id)
      axios.put(`/resources/${id}`, {
        description: description,
        article: article,
        img: img,
        video: video,
        id
      })
      .then((res)=>{
        console.log('res.data', res)
        props.setResources(res.data)
        navigate(-1)
        // navigate('/', { replace: true })
      })
  }

  return (
    <div>
      {/* <div className="mb-3">
        <label className="form-label">Subject Name</label>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} name='subject' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div> */}

      {/* <div className="mb-3">
        <label className="form-label">Step Number</label>
        <input value={step} onChange={(e) => setStep(e.target.value)} name='step' type="number" className="form-control" id="exampleInputPassword1" />
      </div> */}
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Description</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} name='description' type="text" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Article Reference</label>
        <input value={article} onChange={(e) => setArticle(e.target.value)} name='article' type="url" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Image Reference</label>
        <input value={img} onChange={(e) => setImg(e.target.value)} name='img' type="url" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Video Reference</label>
        <input value={video} onChange={(e) => setVideo(e.target.value)} name='video' type="text" className="form-control" id="exampleInputPassword1" />
      </div>
      <button
        onClick={() => { handleClick(params.id) }}
        type="button"
        className="btn btn-primary">
          Submit
      </button>
      {/* <Link to='/'>
        <button onClick={() => { handleClick(params.id) }} type="button" className="btn btn-primary">Submit</button>
      </Link> */}
    </div>
  )
}

export default EditResource