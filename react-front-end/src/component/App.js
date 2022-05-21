import React from 'react';
import useVisualMode from '../hooks/useVisualMode';
import useApplicationData from '../hooks/hook';
import Main from './mainView/Main';
import Login from './Login';
import Signup from './Signup';
import '../sass/app.scss';

export default function App() {
  const {
    state,
    addExpense,
    loginUser,
    updateGoals, 
    removeExpense } = useApplicationData();

  //views
  const LOGIN = 'LOGIN';
  const SIGNUP = 'SIGNUP';
  const SHOW = 'SHOW';

  const { mode, transition, back } = useVisualMode(
    state.user ?
      SHOW :
      LOGIN
  );

  return (
    <div className="app overflow-hidden">

      {mode === LOGIN && <Login
        key='login'
        transition={transition}
        loginUser={loginUser}
      />}

      {mode === SIGNUP && <Signup
        key='signup'
        transition={transition}
        back={back}
      />}

      {mode === SHOW && <Main
        key='main'
        tab={state.tab}
        addExpense={addExpense}
        userId={state.user}
        users={state.users}
        expenses={state.expenses}
        incomes={state.incomes}
        savings={state.savings}
        dataPoints={state.dataPoints}
        updateGoals={updateGoals}
        goals={state.goals}
        alvinVacationSpent={state.alvinVacationSpent}
        removeExpense={removeExpense}
        vacactionMode={state.vacationMode}
      />}
    </div>
  );
}