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

  const { mode, transition, /*back*/} = useVisualMode(props.tab);

  return (
    <div>
      <TopNav />

      {mode === PROFILE && <Profile />}
      {mode === SAVINGS && <Savings />}
      {mode === EXPENSES && <Expenses addExpense={props.addExpense} userId={props.userId}/>}

      <BotNav transition={transition} />
    </div>
  );
}