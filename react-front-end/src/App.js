import React, { useLayoutEffect, useState } from 'react';
import rough from 'roughjs/bundled/rough.esm';
import useApplicationData from "./hooks/useApplicationData";
import axios from 'axios';
import './App.css';

const generator = rough.generator();

function createElement(id, x1, y1, x2, y2, type) {
  const roughElement = type === "line" 
  ? generator.line(x1, y1, x2, y2) 
  : generator.rectangle(x1, y1, x2 - x1, y2 - y1);
  return { id, x1, y1, x2, y2, type, roughElement };
}

const isWithinElement = (x, y, element) => {
  const { type, x1, x2, y1, y2 } = element;
  if (type === 'rectangle') {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    return x >= minX && x <= maxX && y >= minY && y <= maxY;
  } else {
    const a = { x: x1, y: y1 };
    const b = { x: x2, y: y2 };
    const c = { x, y };
    const offset = distance(a, b) - (distance(a, c) + distance(b, c));
    return Math.abs(offset) < 1;
  }
};

const distance = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

const getElementAtPosition = (x, y, elements) => {
  return elements.find(element => isWithinElement(x, y, element));
};

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
  const [action, setAction] = useState('none');
  const [tool, setTool] = useState("line");
  const [selectedElement, setSelectedElement] = useState(null)

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

  const updateElement = (id, x1, y1, x2, y2, type) => {
    const moveElement = createElement(id, x1, y1, x2, y2, type);
    const elementsCopy = [...elements];
    elementsCopy[id] = moveElement;
    setElements(elementsCopy);
  }

  const mouseDown = (event) => {
    const { clientX, clientY } = event;
    if (tool === "selection") {
      const element = getElementAtPosition(clientX, clientY, elements);
      if (element) {
        const offsetX = clientX - element.x1
        const offsetY = clientY - element.y1
        setSelectedElement({...element, offsetX, offsetY})
        setAction("moving");
      }
    } else {
      const id = elements.length
      const downElement = createElement(id, clientX, clientY, clientX, clientY, tool);
      setElements(prevState => [...prevState, downElement]);
      setAction("drawing");
    }
  };

  const mouseMove = (event) => {
    const { clientX, clientY } = event;

    if (tool === "selection") {
      event.target.style.cursor = getElementAtPosition(clientX, clientY, elements) ? "move" : "default"
    }


    if (action === "drawing") {
      const index = elements.length - 1;
      const { x1, y1 } = elements[index];
      updateElement(index, x1, y1, clientX, clientY, tool);

    } else if (action === "moving") {

      const {id, x1, x2, y1, y2, type, offsetX, offsetY} = selectedElement
      const width = x2 - x1;
      const height = y2 - y1;
      const offX1 = clientX - offsetX;
      const offY1 = clientY - offsetY;
      updateElement(id, offX1, offY1, offX1 + width, offY1 + height, type)
    }
  };

  const mouseUp = (event) => {
    setAction("none");
    setSelectedElement(null);
  };

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <input
          type="radio"
          id="selection"
          value="selection"
          checked={tool === "selection"}
          onChange={() => setTool("selection")} />
        <label htmlFor="line">Selection</label>
        <input
          type="radio"
          id="line"
          value="line"
          checked={tool === "line"}
          onChange={() => setTool("line")} />
        <label htmlFor="line">Line</label>
        <input
          type="radio"
          id="rectangle"
          value="rectangle"
          checked={tool === "rectangle"}
          onChange={() => setTool("rectangle")} />
        <label htmlFor="rectangle">Rectangle</label>
        <input
          type="radio"
          id="pencil"
          value="pencil"
          checked={elementType === "pencil"}
          onChange={() => setElementType("pencil")} />
        <label htmlFor="pencil">Pencil</label>
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
