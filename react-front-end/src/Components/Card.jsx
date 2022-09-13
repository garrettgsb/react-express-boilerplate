import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {

  return (
    <div className='cards-title'>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>Hello</h1>
    // </div>
  );
}

export default Card