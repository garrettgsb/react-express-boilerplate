import React from 'react';
import TopNav from './TopNav';
import BotNav from './BotNav';
import Savings from './Savings';
import Expenses from './Expenses';
import Profile from './Profile';
import Vacation from '../mainView/Vacation/Vacation';
import useVisualMode from '../../hooks/useVisualMode';
import '../../sass/main.scss';

export default function Main(props) {

  const PROFILE = 'PROFILE';
  const SAVINGS = 'SAVINGS';
  const EXPENSES = 'EXPENSES';
  const VACATION = 'VACATION';

  const { mode, transition} = useVisualMode(props.tab);
  return (
    <div>
      <TopNav 
      key='topnav'
      savings={props.savings} 
      userId={props.userId}
      users={props.users} 
      />

      {mode === PROFILE && <Profile
      key='profile'
      removeGoal={props.removeGoal}
      userId={props.userId}
      users={props.users}
      incomes={props.incomes}
      savings={props.savings}
      goals={props.goals}
      updateGoals={props.updateGoals}
      />}
      {mode === SAVINGS && <Savings
      key='savings'
      userId={props.userId}
      incomes={props.incomes}
      savings={props.savings}
      goals={props.goals}
      />}
      {mode === EXPENSES && <Expenses 
      key='expenses'
      addExpense={props.addExpense} 
      userId={props.userId}
      expenses={props.expenses}
      dataPoints={props.dataPoints}
      goals={props.goals}
      removeExpense={props.removeExpense}
      vacationMode={props.vacationMode}
      vacationData={props.alvinVacationSpent}
      />}
      {mode === VACATION && <Vacation 
      key='vacation'
      savings={props.savings}
      userId={props.userId}
      goals={props.goals}
      expenses={props.expenses}
      alvinVacationSpent={props.alvinVacationSpent}
      />}

      <BotNav 
      key='botnav'
      transition={transition} 
      />
    </div>
  );
}