import React  from 'react';
import useApplicationData from './useApplicationData';
import './App.css';
import Search from './components/search.js'
import OppositeTimeline from './components/OppositeTimeline.js'
import {userData, repoData} from "./backupData"
import Filter from "./components/Filter"
import NavBar from "./components/AppBar.js"





export default function Application(props) {

  const { setUser, fetchData, state } = useApplicationData();
  

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
            <h4>@<a href={`https://github.com/${state.loginUser}`}>
              {state.loginUser}
            </a></h4>
            <h4>{state.name}'s Timeline</h4>
            <div id="opposite-timeline">
              <OppositeTimeline repositories={repoData} />
            </div> 
      </div>
      )
    }
    
     

    return (
      <main className="App">
        <NavBar />
        <section class="main-container">
          <div id="search-and-filter">
            <Search onSubmit={fetchData} value={state.user || ""} onChange={(e) => setUser(e)} onClick={fetchData}/>
            <Filter></Filter>
          </div>
          
          { state.name ? <Show /> : <div id="show-question-mark"><img src={ state.avatar } alt="nothing"></img></div>}
        </section>
        
               
        
      </main>
);
}
            