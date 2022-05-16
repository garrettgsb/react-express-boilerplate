import React from 'react';
import useVisualMode from '../hooks/useVisualMode';
import useApplicationData from '../hooks/hook';
import Main from './mainView/Main';
import Login from './Login';
import Signup from './Signup';
import '../sass/app.scss';


export default function App(props){
  const { state, fetchData } = useApplicationData();

  //views
  const PROFILE = 'PROFILE';
  const LOGIN = 'LOGIN'; 
  const SIGNUP = 'SIGNUP';
  const SHOW = 'SHOW';

  const { mode, transition, back } = useVisualMode(
    !props.user ?
      SHOW :
      LOGIN
  );

  return (
    <div className="app">

      {mode === LOGIN && <Login />}

      {mode === SIGNUP && <Signup />}
      
      {mode === SHOW && <Main />}

      
    </div>
  );
}