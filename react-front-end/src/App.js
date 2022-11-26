import React, { useLayoutEffect, useState } from 'react';
import rough from 'roughjs/bundled/rough.esm'
import useApplicationData from "./hooks/useApplicationData";
import axios from 'axios';
import './App.css';

const generator = rough.generator();

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

    useLayoutEffect(()=> {
      const canvas = document.getElementById('curtaindraw')
      const context = canvas.getContext('2d')
      const roughCanvas = rough.canvas(canvas)


      const rect = generator.rectangle(10, 10, 200, 200)
      const line = generator.line(10, 10, 200, 200)
      roughCanvas.draw(rect)
      roughCanvas.draw(line)
      console.log('this is useLayoutEffect-a-mania brother')
    },[])

 
    return (
      <canvas 
      id="curtaindraw"
      // style={{backgroundColor: "blue"}}
      width={window.innerWidth}
      height={window.innerHeight}>
      </canvas>
    );

}
