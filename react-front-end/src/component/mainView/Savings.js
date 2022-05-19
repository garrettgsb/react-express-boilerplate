import React from 'react';
import ProgressCircle from './ProgressCircle';
import { getTotalAmount, getDaysTillGoal, getGoalByID, getSavingsByID, getCategoryById } from '../../helpers/helper_functions';

export default function Savings(props) {
  // gets total amount of saved money
const savingsbyID = getSavingsByID(props.savings, props.userId)
const savingsByCatId = getCategoryById(savingsbyID);
const totalSaved = getTotalAmount(savingsByCatId);
  // gets days until end date for goal
const goalByID = getGoalByID(props.goals, props.userId);
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
                {moneyPerWeekToGoal}/day
              </td>
            </tr>
            <tr>
              <td>
                {moneyPerMonthToGoal}/day
              </td>
            </tr>
            <tr>
              <td>
                {moneyPerYearToGoal}/day
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