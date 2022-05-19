import React, {useState} from 'react';
import ProgressCircle from './ProgressCircle';
import '../../sass/savings.scss';
import { getTotalAmount, getDaysTillGoal, getGoalByID, getSavingsByID } from '../../helpers/helper_functions';

export default function Savings(props) {
  // gets total amount of saved money
const savingsbyID = getSavingsByID(props.savings, props.userId)
const totalSaved = getTotalAmount(savingsbyID);
  // gets days until end date for goal
const goalByID = getGoalByID(props.goals, props.userId);
const totalGoal = getTotalAmount(goalByID);
const totalDaysTillGoal = getDaysTillGoal(goalByID);

const [state, setState] = useState({
  goal: goalByID[0].goal_name
})

// if state.goal === 'Vacation' && (props.totalSaved >= props.totalGoal)
//  transition('VACATION')

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
        <img id='piggy-animation' src="https://c.tenor.com/k_giby7nsyIAAAAC/money-piggy-bank.gif" alt="piggy animation"/>
      </div>
    </div>
  );
}