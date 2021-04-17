import React from 'react';
import { useState, useMemo } from 'react';
// import moment from 'moment'

import Header from './Header.jsx';
import Events from './Events.jsx'
import AddEvent from './AddEvent.jsx'
import Chatbox from '../Chat/Chatbox'
import ChatJoin from '../Chat/ChatJoin'
import SafetySend from './SafetySend'

import '../Button.scss';
import '../../App.scss';

import { MeetupsContext } from './MeetupsContext.jsx';
import { CheckedContext } from './CheckedContext.jsx'
import MeetupPanel from './MeetupPanel.jsx';

// import axios from 'axios';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Meetups() {
  const [meetup, setMeetup] = useState('');
  const [showAddEvent, setShowAddEvent] = useState(false)
  const [checked, setChecked] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      location_id: 1,
      name: "Banff",
      date: '2021-04-27',
      time: '22:30:00'
    },
    {
      id: 2,
      location_id: 3,
      name: "Yellowknife",
      date: '2021-05-21',
      time: '22:00:00'
    },
    {
      id: 3,
      location_id: 2,
      name: "Jasper",
      date: '2021-04-15',
      time:'01:20:00'
    }
  ])

  const value = useMemo(() => ({meetup, setMeetup}), [meetup, setMeetup])
  const valueCheck = useMemo(() => ({checked, setChecked}), [checked, setChecked])
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

    // delete event
    const deleteEvent = (id) => {
      setEvents(events.filter((event) => event.id !== id))
    }

    // add event
    const addEvent = (event) => {
      // temporary code; will want to write function to add next available meetup id
      // generate random number for id
      const id = Math.floor(Math.random() * 10000) + 1
      // add id to provided event info
      const newEvent = { id, ...event }

      // display existing events, and add new event to displayed data
      setEvents([...events, newEvent])
    }

    return (
      <>
          <MeetupsContext.Provider value={value}>
        <CheckedContext.Provider value={valueCheck}>
            <div className="container-meetups">
              <div className="container">
                <Header onAdd={() => setShowAddEvent(!showAddEvent)} showAddEvent={showAddEvent}/>        
                {showAddEvent && <AddEvent onAdd={addEvent}/>}
                {events.length > 0 ? <Events events={events} onDelete={deleteEvent} /> : 'No events to show'}
              <br />
              </div>
              <div>
                <MeetupPanel />
              </div>




              <div>
                <SafetySend />
              </div>
            </div>
        </CheckedContext.Provider>
          </MeetupsContext.Provider>
      </>
    );
}
