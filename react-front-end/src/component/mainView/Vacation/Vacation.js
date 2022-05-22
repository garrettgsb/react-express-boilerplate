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

const testData = {
  amount: 3000000,
  email: "alvintest@hotmail.com",
  end_date: "2022-06-01",
  goal_name: "Vacation: Iceland",
  id: 1,
  start_date: "2022-03-14",
  user_id: 1,
  username: "Alvin",
}


export default function Vacation(props) {
  const savingsById = getSavingsByID(props.savings, props.userId);
  const totalSaved = getTotalAmount(savingsById);
  
  const vacationInfo = getGoalByID(props.alvinVacationSpent, props.userId);
  
  const vacationExpenses = filteredVacationExpenses(props.expenses, props.userId, testData.start_date /*vacationInfo.start_date*/);
  const totalSpentOnVacation = getTotalAmount(vacationExpenses);
  // const homeTime = getDaysTillGoal(vacationInfo) //SWAP WHEN DEPLOY
  const homeTime = getDaysTillGoal(testData) // HARDCODE DATA FOR DEV
  
  
  // const totalSpent = getTotalAmount(props.alvinVacationSpent);

  // const goalName = props.alvinVacationSpent[0].goal_name;
  // const daysTillEndOfVacation = getDaysTillGoal(props.alvinVacationSpent[0]);
  // gets money per day/week/month/year
  // const moneyTillGoal = totalSaved - totalSpent;
  // const moneyPerDayToGoal = '$' + (moneyTillGoal / daysTillEndOfVacation / 100).toFixed(2);
  // const moneyPerWeekToGoal = '$' + (moneyTillGoal / (daysTillEndOfVacation / 7) / 100).toFixed(2);

  const budgetLeft = totalSaved - totalSpentOnVacation;
  const dayAllowance = `$${(budgetLeft / homeTime / 100).toFixed(2)}`;
  const weekAllowance = `$${(budgetLeft / (homeTime / 7) / 100).toFixed(2)}`;

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
                    {vacationInfo.goal_name}
                  </h1>
                </td>
              </tr>
              <tr>
                <td>
                  <h1>
                    ${(totalSpentOnVacation / 100).toFixed(2)} / ${(vacationInfo.goal_amount / 100).toFixed(2)}
                  </h1>
                </td>
              </tr>
              <tr>
                <td>
                  {homeTime} days until home time
                </td>
              </tr>
              <tr>
                <td>
                  Advised to spend no more than {dayAllowance}/day
                </td>
              </tr>
              <tr>
                <td>
                  Advised to spend no more than {weekAllowance}/week
                </td>
              </tr>
            </thead>
          </table>
          <br />
          <ProgressCircle
            key='vacationCircle'
            total_saved={totalSpentOnVacation}
            goalTotal_cents={totalSaved} />
        </div>
      </div>
    </div>
  )
};