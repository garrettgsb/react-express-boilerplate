import React  from 'react';
import useApplicationData from './useApplicationData';
import './App.scss';
import Search from './components/search.js'
import OppositeTimeline from './components/OppositeTimeline.js'
import {userData, repoData} from "./backupData"
import Filter from "./components/Filter"
import NavBar from "./components/AppBar.js"
import { useState } from 'react'
import ShowLiked from './components/showLiked';
import { setPageStateUpdate } from '@material-ui/data-grid';
import Show from "./components/Show"




export default function Application(props) {
  const { setStorage, setUser, fetchData, state} = useApplicationData();

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
    console.log(state)
    return (
      <main className="App">

        <NavBar toLiked={toLiked} setStorage={ setStorage }/>
        <section class="main-container">
          <div id="search-and-filter">
            <Search fetchData={fetchData} toMain={toMain}/>
            <Filter setFilter={setFilter}></Filter>
          </div>
          { show==="main" && (state.loginUser ? <Show avatar={state.avatar} loginUser={state.loginUser} name={state.name} filterParam={filterParam} repositories={state.repositories} /> : <div id="show-question-mark"><img src={ state.avatar } alt="nothing"></img></div>)}
          { show==="liked" && <ShowLiked toMain={toMain}/>}
        </section>
        
               
        
      </main>
);
}
            