import { AuthContext } from '../App'
import React from "react";
import './styles/canvas.css'
import Canvas from "../components/Canvas";
import Toolbar from "../components/Toolbar";
let canvasH = window.innerHeight - 200;
let canvasW = window.innerWidth - 400;
export default function CanvasPage() {
  return(
    <Canvas 
      height={canvasH}
      width={canvasW}
    /> 
  )
}