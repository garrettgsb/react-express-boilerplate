import React  from 'react';
import useApplicationData from './useApplicationData';
import './App.css';
import Search from './components/search.js'
import OppositeTimeline from './components/OppositeTimeline.js'
import {userData, repoData} from "./backupData"
import Filter from "./components/Filter"
import NavBar from "./components/AppBar.js"
import { useState } from 'react'
import ShowLiked from './components/showLiked';




export default function Application(props) {

  const { setStorage, setUser, fetchData, state} = useApplicationData();
  

  // const appointmentsObject = dailyAppointments.map(appointment => {
  //   const interview = getInterview(state, appointment.interview);
  //   const dailyInterviewers = getInterviewersForDay(state, state.day);

  //   return (
  //     <Appointment
  //     key={appointment.id}
  //     id={appointment.id}
  //     time={appointment.time}
  //     interview={interview}
  //     interviewers={dailyInterviewers}
  //     bookInterview={bookInterview}
  //     cancelInterview={cancelInterview}
  //     canInt={canInt}
  //   />
  //   );
  // })

    const Show = () => {
      return (<div id="show">
                <img src={ state.avatar } alt="nothing"></img>
                <a href={`https://github.com/${state.loginUser}`}>
                  <h4>@{state.loginUser}</h4>
                </a>
                <h4>{state.name}'s Timeline</h4>
                <div id="opposite-timeline">
                  <OppositeTimeline filterParam={filterParam} repositories={state.repositories} avatar={state.avatar}/>
                </div> 
              </div>
      )
    }
    const [filterParam, setParam] = useState();
    const setFilter = (param) =>{
      setParam(prev=>(param))
    }
    const [show,setShow] = useState("main")
    const toLiked = () => {
      setShow("liked")
    }
    const toMain = () => {
      setShow("main")
    }
     

    return (
      <main className="App">
        <NavBar toLiked={toLiked} setStorage={ setStorage }/>
        <section class="main-container">
          <div id="search-and-filter">
            <Search onSubmit={fetchData} value={state.user || ""} onChange={(e) => setUser(e)} onClick={fetchData}/>
            <Filter setFilter={setFilter}></Filter>
          </div>
          
          { show==="main" && (state.name ? <Show /> : <div id="show-question-mark"><img src={ state.avatar } alt="nothing"></img></div>)}
          { show==="liked" && <ShowLiked toMain={toMain}/>}
        </section>
        
               
        
      </main>
);
}
            