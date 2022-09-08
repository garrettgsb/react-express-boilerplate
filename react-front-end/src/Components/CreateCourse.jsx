import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function CreateCourse(props) {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [article, setArticle] = useState('');
  const [img, setImg] = useState('');
  const [video, setVideo] = useState('');

  const handleClick = ()=> {
    axios.post('/resources', {
      subject: subject,
      description: description,
      article: article,
      img: img,
      video: video,
    })
    // .then(()={

    // })
  }

  return (
    <div>
  {/* <form id="create-course" method="POST" > */}
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Subject Name</label>
          <input value={subject} onChange={(e)=>setSubject(e.target.value)} name='subject' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Discription</label>
          <input value={description} onChange={(e)=>setDescription(e.target.value)} name='description' type="text" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Article Reference</label>
          <input value={article} onChange={(e)=>setArticle(e.target.value)} name='article' type="url" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Image Reference</label>
          <input value={img} onChange={(e)=>setImg(e.target.value)} name='img' type="url" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Video Reference</label>
          <input value={video} onChange={(e)=>setVideo(e.target.value)} name='video' type="text" class="form-control" id="exampleInputPassword1" />
        </div>

        {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
        <button onClick={handleClick} type="button" class="btn btn-primary">Submit</button>
    {/* </form> */}
    </div>
  )
}

export default CreateCourse