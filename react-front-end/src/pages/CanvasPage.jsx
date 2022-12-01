import { AuthContext } from '../App'
import React from "react";
import './styles/canvas.css'
import Canvas from "../components/Canvas";
let canvasH = 700;
let canvasW = 1500;

export default function CanvasPage(props) {

  const user = React.useContext(AuthContext);

  return(
    <main className="main_page">
      <article className="sidebar">
        <label>TOOLS GO HERE</label>
      </article>
      <section className="canvas_section">
        <Canvas 
          height={canvasH}
          width={canvasW}          
        />
      </section>
      <section className="save_edit_btns">
        <button>SAVE</button>
      </section>
    </main>
  )
}