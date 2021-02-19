import { useState, createContext } from "react";
import "./App.scss";

import Customer from "./Customer/Customer";
import applicationData from "../hooks/useApplicationData";
import { appContext } from "./appContext";
import Stripe from "./Customer/Stripe";
// import StoreOwner from "./StoreOwner/StoreOwner";

// test

export default function App() {
  const { state, setStore, postOrder, updateBeans } = applicationData();

  // get the user using selector function here:
  const user = {
    username: "test user",
    type: "customer",
  };

  const customer = user.type === "customer";
  const storeOwner = user.type === "store owner";

  return (
    <div className="App">
      {customer && (
        <appContext.Provider
          value={{ state, setStore, postOrder, updateBeans }}
        >
          <Customer />
        </appContext.Provider>
      )}
      {/* {storeOwner && (
        <appContext.Provider value={{ state }}>
          <StoreOwner />
        </appContext.Provider>
      )} */}
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
