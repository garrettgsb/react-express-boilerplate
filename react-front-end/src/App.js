import React  from 'react';
import useApplicationData from './useApplicationData';
import './App.css';
import Search from './components/search.js'
import Repository from './components/repository.js'
import BasicTimeline from './components/test.js'



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


    const repositoryArray = state.repositories
    const repositoriesObject = repositoryArray.map(repository => {

      return (
        <Repository 
          name={repository.name}
          description={repository.description}
          created_at={repository["created_at"]}
        />
      )
    })
    
     

    return (
      <main className="App">
        <nav>
          <h1>NavBar</h1>
          </nav>
        <div>
        <Search onSubmit={fetchData} value={state.user || ""} onChange={(e) => setUser(e)} onClick={fetchData}/>
        </div>
        <div>FILTER</div>
        <div>
          <h1>show</h1>
          <h4>Github User: <a href={`https://github.com/${state.loginUser}`}>
            <h4>{state.loginUser}</h4>
          </a></h4>
          <h4>Name: {state.name}</h4>
          <img src={ state.avatar } alt="nothing"></img>
          {repositoriesObject}
        </div>
        <BasicTimeline />
      </main>
    );
}
            