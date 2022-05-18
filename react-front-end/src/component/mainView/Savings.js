import React from 'react';
import ProgressCircle from './ProgressCircle';
import { getTotalAmount } from '../../helpers/helper_functions';

export default function Savings(props) {
  const getIncomebyID = props.incomes.filter((expenses) => expenses.user_id == props.userId);
  const total = getTotalAmount(getIncomebyID);
  const goalByID = props.goals.filter((goal) => goal.user_id === props.userId);
  const totalGoal = getTotalAmount(goalByID);
  
  

  const hardProps = {
    goal: 'A GOAT',
    // saved_cents: 2500,
    // goalTotal_cents: 500000,
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
                  ${(total / 100).toFixed(2)} / ${(totalGoal / 100).toFixed(2)}
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                {hardProps.days} days until {hardProps.goal}
              </td>
            </tr>
            </thead>
            </table>
            <ProgressCircle 
            total_saved={total} 
            goalTotal_cents={totalGoal}/>
        </div>
      </div>
    </div>
  );
}