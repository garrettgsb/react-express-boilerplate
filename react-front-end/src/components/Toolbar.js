import React from "react";
import '../pages/styles/toolbar.css'
export default function Toolbar(props) {
  return (
    <div className="toolbar">
      <div className="tools">

        <div className="selectTool">
          <i class="fa-solid fa-hand-pointer"></i>
          <label htmlFor="line">Selection</label>
          <input
            type="radio"
            id="selection"
            value="selection"
            checked={props.tool === "selection"}
            onChange={() => props.setTool("selection")} 
          />
        </div>

        <div className="lineTool">
          <i class="fa-solid fa-lines-leaning"></i>
          <label htmlFor="line">Line</label>
          <input
            type="radio"
            id="line"
            value="line"
            checked={props.tool === "line"}
            onChange={() => props.setTool("line")} 
          />
        </div>
        
        <div className="rectTool">
          <i class="fa-regular fa-square"></i>
          <label htmlFor="rectangle">Rectangle</label>
          <input
            type="radio"
            id="rectangle"
            value="rectangle"
            checked={props.tool === "rectangle"}
            onChange={() => props.setTool("rectangle")} 
          />
        </div>
        
        <div className="circTool">
          <i class="fa-regular fa-circle"></i>
          <label htmlFor="circle">Circle</label>
          <input
            type="radio"
            id="circle"
            value="circle"
            checked={props.tool === "circle"}
            onChange={() => props.setTool("circle")} 
          />
        </div>
        
        <div className="pencilTool">
          <i class="fa-solid fa-pencil"></i>
          <label htmlFor="pencil">Pencil</label>
          <input
            type="radio"
            id="pencil"
            value="pencil"
            checked={props.tool === "pencil"}
            onChange={() => props.setTool("pencil")} 
          />
        </div>

        <div className="eraserTool">
          <i class="fa-solid fa-eraser"></i>
          <label htmlFor="eraser">Eraser</label>
          <input
            type="radio"
            id="eraser"
            value="eraser"
            checked={props.tool === "eraser"}
            onChange={() => props.setTool("eraser")} 
          />
        </div>
        
        <div className="fillTool">
          <i class="fa-solid fa-fill-drip"></i>
          <label htmlFor="fill">Fill</label>
          <input
            type="radio"
            id="fill"
            value="fill"
            checked={props.tool === "fill"}
            onChange={() => props.setTool("fill")} 
          />
        </div>

      </div>
      
      <div className="brush_option"> 
        Brush Size
        <input type="range" id= "size-slider" min="1" max="70" defaultValue="24" onChange={(event) => props.changeBrushSize(event) }></input>
        <label>{props.brushSize}px</label>
      </div>

      <div className="colors">

        <label>
          Black
          <input type="radio" checked={props.color === "black"} onChange={() => props.setColor("black")} />
        </label>

        <label>
          Red
          <input type="radio" checked={props.color === "red"} onChange={() => props.setColor("red")} />
        </label>

        <label>
          Green
          <input type="radio" checked={props.color === "green"} onChange={() => props.setColor("green")} />
        </label>

        <label>
          Blue
          <input type="radio" checked={props.color === "blue"} onChange={() => props.setColor("blue")} />
        </label>

      </div>

      <div className="tool_buttons">
        <button onClick={props.undo}>Undo</button>
        <button onClick={props.clear}>Clear</button>
        <button onClick={props.save}>Save</button>
      </div> 

    </div>
  )
}