import { useState } from 'react';
import axios from 'axios';
import './App.scss';

import Customer from './Customer/Customer'
import applicationData from '../hooks/useApplicationData';

// test

export default function App() {
  const {
    state
  } = applicationData();

  console.log(state)

  // get the user using selector function here:
  const user = {
    username: 'test user',
    type: 'customer'
  }

  const customer = user.type === 'customer';
  const storeOwner = user.type === 'store owner';

  return(
    <div className="App">
      { customer && (
      // customer components go here (make a customer component?)
      <Customer />
      )}    

      { storeOwner && (
      // store owner components go here (make a store owner component?)
      <p>I am a store owner</p>
      // <StoreOwner />
      )}   
    </div>
  ); 

  // const [message, setMessage] =  useState('Click the button to load data!')
  // const fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     setMessage(response.data.message);
  //   }) 
  // }
  //   return (
  //     <div className="App">
  //       <h1>{ message }</h1>
  //       <button onClick={fetchData} >
  //         Fetch Data
  //       </button>        
  //     </div>
  //   );
  
}
