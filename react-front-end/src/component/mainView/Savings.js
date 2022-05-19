import React from 'react';
import ProgressCircle from './ProgressCircle';
import { getTotalAmount, getDaysTillGoal } from '../../helpers/helper_functions';

export default function Savings(props) {
  // gets total amount of saved money
  const savingsbyID = props.savings.filter((savings) => savings.user_id === props.userId);
  const savingsByCatId = savingsbyID.filter((categories) => categories.category_id === 8);
  const totalSaved = getTotalAmount(savingsByCatId);
  
  // gets days until end date for goal
  const goalByID = props.goals.filter((goal) => goal.user_id === props.userId);
  const totalGoal = getTotalAmount(goalByID);
  const totalDaysTillGoal = getDaysTillGoal(goalByID);

  // gets money per day/week/month/year
  const moneyTillGoal = totalGoal - totalSaved;
  const moneyPerDayToGoal = '$' + (moneyTillGoal / totalDaysTillGoal / 100).toFixed(2);
  const moneyPerWeekToGoal = '$' + (moneyTillGoal / (totalDaysTillGoal / 7) / 100).toFixed(2);
  const moneyPerMonthToGoal = '$' + (moneyTillGoal / (totalDaysTillGoal / 31) / 100).toFixed(2);
  const moneyPerYearToGoal = '$' + (moneyTillGoal / (totalDaysTillGoal / 365) / 100).toFixed(2);

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
                  ${(totalSaved / 100).toFixed(2)} / ${(totalGoal / 100).toFixed(2)}
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                {totalDaysTillGoal} days until {goalByID[0].end_date}
              </td>
            </tr>
            <tr>
              <td>
                You can save {moneyPerDayToGoal}/day
              </td>
            </tr>
            <tr>
              <td>
              You can save {moneyPerWeekToGoal}/week
              </td>
            </tr>
            <tr>
              <td>
              You can save {moneyPerMonthToGoal}/month
              </td>
            </tr>
            <tr>
              <td>
              You can save {moneyPerYearToGoal}/year
              </td>
            </tr>
            </thead>
            </table>
            <ProgressCircle 
            total_saved={totalSaved} 
            goalTotal_cents={totalGoal}/>
        </div>
      </div>
    </div>
  );
}