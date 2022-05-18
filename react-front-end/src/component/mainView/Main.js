import React from 'react';
import TopNav from './TopNav';
import BotNav from './BotNav';
import Savings from './Savings';
import Expenses from './Expenses';
import Profile from './Profile';
import useVisualMode from '../../hooks/useVisualMode';
import '../../sass/main.scss';

export default function Main(props) {

  const PROFILE = 'PROFILE';
  const SAVINGS = 'SAVINGS';
  const EXPENSES = 'EXPENSES';

  const { mode, transition} = useVisualMode(props.tab);
  return (
    <div>
      <TopNav />

      {mode === PROFILE && <Profile />}
      {mode === SAVINGS && <Savings
      userId={props.userId}
      incomes={props.incomes}
      goals={props.goals}
      fake={props.fake}
      />}
      {mode === EXPENSES && <Expenses 
      key={props.expenses.length}
      addExpense={props.addExpense} 
      userId={props.userId}
      expenses={props.expenses}
      />}

      <BotNav transition={transition} />
    </div>
  );
}