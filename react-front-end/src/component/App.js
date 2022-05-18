import React from 'react';
import useVisualMode from '../hooks/useVisualMode';
import useApplicationData from '../hooks/hook';
import Main from './mainView/Main';
import Login from './Login';
import Signup from './Signup';
import '../sass/app.scss';

export default function App(props){
  const { state, setUser, addExpense } = useApplicationData();

  //views
  const LOGIN = 'LOGIN'; 
  const SIGNUP = 'SIGNUP';
  const SHOW = 'SHOW';

  const { mode } = useVisualMode(
    !props.user ?
      SHOW :
      LOGIN
  );
  console.log( 'APPPROPS:', state)

  return (
    <div className="app">

      {mode === LOGIN && <Login setUser={setUser}/>}

      {mode === SIGNUP && <Signup />}
      
      {mode === SHOW && <Main 
      tab={state.tab} 
      addExpense={addExpense} 
      userId={state.user}
      expenses={state.expenses}
      incomes={state.incomes}
      savings={state.savings}
      goals={state.goals}
      />}

    </div>
  );
}