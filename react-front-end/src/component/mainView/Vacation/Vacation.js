import React from 'react';
import ProgressCircle from '../ProgressCircle';
import '../../../sass/vacation.scss';
import {
  getTotalAmount,
  getDaysTillGoal,
  getSavingsByID,
  filteredVacationExpenses,
  getGoalByID
} from '../../../helpers/helper_functions';

export default function Vacation(props) {
	console.log('PROPS:', props)

  const savingsById = getSavingsByID(props.savings, props.userId);
  const totalSaved = getTotalAmount(savingsById);

  const totalSpent = getTotalAmount(props.alvinVacationSpent);
  const goalName = props.alvinVacationSpent[0].goal_name;
  const daysTillEndOfVacation = getDaysTillGoal(props.alvinVacationSpent[0]);

  const vacationInfo = getGoalByID(props.goals, props.userId)
  const vacationExpenses = filteredVacationExpenses(props.expenses, props.userId)
  console.log('VACATION EXPENSES:', vacationExpenses)

  // gets money per day/week/month/year
  const moneyTillGoal = totalSaved - totalSpent;
  const moneyPerDayToGoal = '$' + (moneyTillGoal / daysTillEndOfVacation / 100).toFixed(2);
  const moneyPerWeekToGoal = '$' + (moneyTillGoal / (daysTillEndOfVacation / 7) / 100).toFixed(2);


  return (
    <div>
      <div className='d-flex align-items-center justify-content-center text-center goalbox'>
        <div className='goal-container'>
          <br />
          <table>
            <thead>
              <tr>
                <td>
                  <h1>
                    {goalName}
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
                  {daysTillEndOfVacation} days until home time
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
            </thead>
          </table>
          <br />
          <ProgressCircle
            key='vacationCircle'
            total_saved={totalSpent}
            goalTotal_cents={totalSaved} />
        </div>
      </div>
    </div>
  )
};