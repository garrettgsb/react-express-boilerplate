import React from 'react';
import TopNav from './TopNav';
import BotNav from './BotNav';
import Savings from './Savings';
import Spending from './Spending';
import Profile from './Profile';

export default function Main() {

  const PROFILE = 'PROFILE';
  const SAVINGS = 'SAVINGS';
  const SPENDING = 'SPENDING';

  return (
    <div>
      <TopNav />

      <Profile />
      <Savings />
      <Spending />

        <h1>
          Main
        </h1>
      <BotNav />
    </div>
  );
}