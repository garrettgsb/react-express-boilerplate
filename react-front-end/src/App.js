import React, { useLayoutEffect, useState } from 'react';
import rough from 'roughjs/bundled/rough.esm'
import useApplicationData from "./hooks/useApplicationData";
import axios from 'axios';
import './App.css';

const generator = rough.generator();

function createElemenet(x1, y1, x2, y2) {
  const roughElement = generator.line(x1, y1, x2 , y2);
  return {x1, y1, x2, y2, roughElement} 
}

export default function App() {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     message: 'Click the button to load data!'
  //   }
  // }

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }
    const [elements, setElements] = useState([]);
    const [drawing, setDrawing] = useState(false);

    useLayoutEffect(()=> {
      const canvas = document.getElementById('curtaindraw')
      const context = canvas.getContext('2d')
      context.clearRect(0, 0, canvas.width, canvas.height)
      const roughCanvas = rough.canvas(canvas)

      const rect = generator.rectangle(10, 10, 200, 200)
      const line = generator.line(10, 10, 200, 200)
      roughCanvas.draw(rect)
      roughCanvas.draw(line)
      console.log('this is useLayoutEffect-a-mania brother')
    })

    const handleMouseDown = (event) => {
      setDrawing(true); 

      const {clientX, clientY} = event; 

      const element = createElemenet(clientX, clientY, clientX, clientY);
      setElements(prevState => [...prevState, element]);
    };

    const handleMouseMove = (event) => {
      if(!drawing) return; 

      const { clientX, clientY } = event; 
      console.log(clientX, clientY);
    };

    const handleMouseUp = () => {
      setDrawing(false);
    }

 
    return (
      <canvas 
      id="curtaindraw"
      // style={{backgroundColor: "blue"}}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}>
        Canvas
      </canvas>
    );

}
