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
      savings={props.savings} 
      userId={props.userId}
      users={props.users} 
      />

      {mode === PROFILE && <Profile
      userId={props.userId}
      users={props.users}
      incomes={props.incomes}
      savings={props.savings}
      goals={props.goals}
      />}
      {mode === SAVINGS && <Savings
      userId={props.userId}
      incomes={props.incomes}
      savings={props.savings}
      goals={props.goals}
      />}
      {mode === EXPENSES && <Expenses 
      key={props.expenses.length}
      addExpense={props.addExpense} 
      userId={props.userId}
      expenses={props.expenses}
      dataPoints={props.dataPoints}
      goals={props.goals}
      />}

      {mode === VACATION && <Vacation 
      savings={props.savings}
      userId={props.userId}
      alvinVacationSpent={props.alvinVacationSpent}
      />}

      <BotNav 
      transition={transition} 
      />
    </div>
  );
}