import { AuthContext } from '../App';
import React from "react";
import './styles/canvas.css';
import Canvas from "../components/Canvas";
import Toolbar from "../components/Toolbar";
let canvasH = window.innerHeight - 200;
let canvasW = window.innerWidth - 400;

export default function CanvasPage() {

  const user = React.useContext(AuthContext);

  if (user) {
    return (
      <Canvas
        height={canvasH}
        width={canvasW}
      />
    );
  }
  return (

    <main className="main_page">
      <article className="sidebar">

      </article>
      <p>Please <a href="/login">Log in</a></p>
    </main>
  );
}