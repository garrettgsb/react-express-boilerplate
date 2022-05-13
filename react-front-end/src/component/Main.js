import React from 'react';
import TopNav from './TopNav';
import BotNav from './BotNav';
import Savings from './Savings';
import Spending from './Spending';

export default function Main() {

  const SAVINGS = 'SAVINGS';

  return (
    <div>
      <TopNav />

      <Savings />
      <Spending />

        <h1>
          Main
        </h1>
      <BotNav />
    </div>
  );
}