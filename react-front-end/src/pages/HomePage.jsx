import React from "react";
import './styles/home.css';
import { Link } from "react-router-dom";
export default function HomePage() {
  return(
    <main className="main_page">
      <section className="main_section">
        <label className="title">CurtainDraw</label>
        <Link to="/canvas" className="new_canvas" style={{color: 'rgb(50,50,50)', textDecoration: 'none' }}>Create New</Link>
        <div className="examples">

          <div className="ex1">
            <img src="freehand.png" />
            <label>Freehand Drawing!</label>
          </div>

          <div className="ex2">
            <img src="shapes.png" />
            <label>Create Shapes!</label>
          </div>

          <div className="ex3">
            <img src="erase.png" />
            <label>Erase And Start Over!</label>
          </div>

          <div className="ex4">
            <img src="drawex.png" />
            <label>Put It All Together, and Save!</label>
          </div>

        </div>
      </section>
    </main>
  )
}