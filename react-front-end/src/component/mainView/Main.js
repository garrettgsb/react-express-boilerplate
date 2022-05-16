import React from 'react';
import TopNav from './TopNav';
import BotNav from './BotNav';
import Savings from './Savings';
import Spending from './Spending';
import Profile from './Profile';
import useVisualMode from '../../hooks/useVisualMode';
import '../../sass/main.scss';

export default function Main(props) {

  const PROFILE = 'PROFILE';
  const SAVINGS = 'SAVINGS';
  const SPENDING = 'SPENDING';

const { mode/*, transition, back */} = useVisualMode(SPENDING);

  return (
    <div>
      <TopNav />

      {mode === PROFILE && <Profile />}
      {mode === SAVINGS && <Savings />}
      {mode === SPENDING && <Spending />}

      <BotNav />
    </div>
  );
}