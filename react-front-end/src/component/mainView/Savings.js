import React from 'react';
import PieChart from './PieChart';
import ProgressCircle from './ProgressCircle'

export default function Savings(props) {


  const hardProps = {
    goal: 'A GOAT',
    saved_cents: 2500,
    goalTotal_cents: 500000,
    days: 25
  }

  return (
    <div>
      <div className='goal-container'>
        <br />
        <br />
        <div className='d-flex align-items-center justify-content-center text-center'>
          <table>
            <thead>
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
            </thead>
            <ProgressCircle />
          </table>
        </div>
      </div>
    </div>
  );
}