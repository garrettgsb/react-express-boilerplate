import React, { useLayoutEffect, useState } from 'react';
import rough from 'roughjs/bundled/rough.esm';
import useApplicationData from "./hooks/useApplicationData";
import axios from 'axios';
import './App.css';

const generator = rough.generator();

function createElement(x1, y1, x2, y2, type) {
  const roughElement = type === "line" ? generator.line(x1, y1, x2, y2) : generator.rectangle(x1, y1, x2 - x1, y2 - y1);
  return { x1, y1, x2, y2, roughElement };
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
  const [elementType, setElementType] = useState("line");

  useLayoutEffect(() => {
    const canvas = document.getElementById('curtaindraw');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);

    // const rect = generator.rectangle(10, 10, 200, 200);
    // const line = generator.line(10, 10, 200, 200);
    // roughCanvas.draw(rect);

    elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement));
    // roughCanvas.draw(line);
  }, [elements]);

  const mouseDown = (event) => {
    setDrawing(true);
    const { clientX, clientY } = event;
    const downElement = createElement(clientX, clientY, clientX, clientY, elementType);
    setElements(prevState => [...prevState, downElement]);
  };

  const mouseMove = (event) => {
    if (!drawing) {
      return;
    }

    const { clientX, clientY } = event;
    const index = elements.length - 1;
    const { x1, y1 } = elements[index];
    const moveElement = createElement(x1, y1, clientX, clientY, elementType);

    const elementsCopy = [...elements];
    elementsCopy[index] = moveElement;
    setElements(elementsCopy);
    // console.log(clientX, clientY);
  };
  const mouseUp = (event) => {
    setDrawing(false);
  };

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <input
          type="radio"
          id="line"
          value="line"
          checked={elementType === "line"}
          onChange={() => setElementType("line")} />
        <label htmlFor="line">Line</label>
        <input
          type="radio"
          id="rectangle"
          value="rectangle"
          checked={elementType === "rectangle"}
          onChange={() => setElementType("rectangle")} />
        <label htmlFor="rectangle">Rectangle</label>
      </div>
      <canvas
        id='curtaindraw'
        // style={{backgroundColor: 'blue'}}
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}>
        Canvas
      </canvas>
    </div>
  );

}
