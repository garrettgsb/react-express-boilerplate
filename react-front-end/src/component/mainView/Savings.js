import React from 'react';
import PieGraph from './PieChart';
import LineGraph from './LineGraph';
import useVisualMode from '../../hooks/useVisualMode';

export default function Savings() {

  const PIE = 'PIE';
  const LINE = 'LINE';

  const { mode, transition, back } = useVisualMode(PIE);

  return (
    <div>
    
    {mode === PIE && <PieChart />}
    {mode === LINE && <LineGraph />}

    <h1>
      Savings
    </h1>
    </div>
  );
}