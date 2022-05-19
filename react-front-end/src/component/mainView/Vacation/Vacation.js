import React from 'react';
import ProgressCircle from '../ProgressCircle';

export default function Vacation(props) {



  const goalByID = [{
    goal_name: 'test',
  }]
  const totalSaved = 1000000;
  const totalSpent = 690000;
  const totalDaysTillGoal = 69;
  const moneyPerDayToGoal = 0;
  const moneyPerWeekToGoal = 0;
  const moneyPerMonthToGoal = 0;

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
                  {goalByID[0].goal_name}
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <h1>
                  ${(totalSpent / 100).toFixed(2)} / ${(totalSaved / 100).toFixed(2)}
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                {totalDaysTillGoal} days until home time
              </td>
            </tr>
            <tr>
              <td>
                Advised to spend no more than {moneyPerDayToGoal}/day
              </td>
            </tr>
            <tr>
              <td>
                Advised to spend no more than {moneyPerWeekToGoal}/week
              </td>
            </tr>
            <tr>
              <td>
                Advised to spend no more than {moneyPerMonthToGoal}/month
              </td>
            </tr>
          </thead>
        </table>
        <ProgressCircle
          total_saved={totalSpent}
          goalTotal_cents={totalSaved} />
      </div>
    </div>
  </div>
)
};