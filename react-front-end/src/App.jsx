import React from 'react';
import { useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Forecast from './components/Forecast.jsx';
import './App.scss';
import './components/Button.scss';
import Header from './components/Header.jsx';
import Events from './components/Meetups/Events.jsx'

function App() {

  const [events, setEvents] = useState([
    {
      id: 1,
      location_id: 1,
      date: '2021-04-27',
      time: '22:30:00'
    },
    {
      id: 2,
      location_id: 3,
      date: '2021-05-21',
      time: '22:00:00'
    },
    {
      id: 3,
      location_id: 2,
      date: '2021-04-15',
      time:'01:20:00'
    }
  ])

  // const constructor = (props) => {
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

    return (
      <div className="container">
        <Header />        
        <Events events={events} />
      </div>
    );
}

export default App;
