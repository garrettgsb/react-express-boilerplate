import React from 'react';
import PieChart from './PieChart';
import LineGraph from './LineGraph';
import useVisualMode from '../../hooks/useVisualMode';

export default function Savings(props) {


  const hardProps = {
    goal: 'THE GOAL',
    saved_cents: 100000,
    goalTotal_cents: 500000,
    days: 25
  }

  const PIE = 'PIE';
  const LINE = 'LINE';

  const { mode/*, transition, back */ } = useVisualMode(PIE);

  return (
    <div>
      <h1>
        Savings
      </h1>
      <div class='goal-container'>
        {mode === PIE && <PieChart />}
        {mode === LINE && <LineGraph />}
        <div>
        GoalTABLE
        
        </div>
      </div>
      
    </div>
  );
}