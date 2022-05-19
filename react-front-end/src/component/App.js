import React from 'react';
import useVisualMode from '../hooks/useVisualMode';
import useApplicationData from '../hooks/hook';
import Main from './mainView/Main';
import Login from './Login';
import Signup from './Signup';
import '../sass/app.scss';

export default function App(props){
  const { state, setUser, addExpense, loginUser } = useApplicationData();

  //views
  const LOGIN = 'LOGIN'; 
  const SIGNUP = 'SIGNUP';
  const SHOW = 'SHOW';

  const { mode, transition } = useVisualMode(
    state.user > 3 ?
      LOGIN :
      SHOW
  );

  return (
    <div className="app">

      {mode === LOGIN && <Login user={state.user} setUser={setUser} transition={transition} loginUser={loginUser}/>}

      {mode === SIGNUP && <Signup transition={transition}/>}
      
      {mode === SHOW && <Main 
      tab={state.tab} 
      addExpense={addExpense} 
      userId={state.user}
      expenses={state.expenses}
      incomes={state.incomes}
      savings={state.savings}
      dataPoints={state.dataPoints}
      goals={state.goals}
      />}

    </div>
  );
}