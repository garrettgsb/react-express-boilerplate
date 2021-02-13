import { useState } from 'react';
import axios from 'axios';
import './App.css';

// test

function App() {

  // get the user using selector function here:
  const user = {
    type: 'store owner'
  }

  const customer = user.type === 'customer';
  const storeOwner = user.type === 'store owner';

  return(
    <div className="App">
      { customer && 
      // customer components go here
      <p>I am a customer</p> 
      }    

      { storeOwner && 
      // store owner components go here
      <p>I am a store owner</p>
      }   
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

export default App;
