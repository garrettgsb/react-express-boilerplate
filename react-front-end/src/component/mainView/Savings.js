import React from 'react';
import PieChart from './PieChart';
import LineGraph from './LineGraph';
import useVisualMode from '../../hooks/useVisualMode';

export default function Savings(props) {


  const hardProps = {
    goal: 'A GOAT',
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
        <br />
        <br />
        <div class='d-flex align-items-center justify-content-center text-center'>
          <table>
            <tr>
              <td>
                <h1>
                  {hardProps.goal}
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <h1>
                  {hardProps.saved_cents} / {hardProps.goalTotal_cents}
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                {hardProps.days} days until {hardProps.goal}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}